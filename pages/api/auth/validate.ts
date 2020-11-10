import "reflect-metadata";
import { NextApiRequest, NextApiResponse } from "next";
import { f, plainToClass, PropertyValidator, PropertyValidatorError, validate, ValidationError } from "@marcj/marshal";
import { sleep } from "../../../utils/sleep";

class MyCustomValidator implements PropertyValidator {
  validate<T>(value: string): PropertyValidatorError {
    if (value.length > 6) {
      return new PropertyValidatorError("too_long", "Too long :()");
    }

    if (value.length < 6) {
      return new PropertyValidatorError("too_short", "Too short :()");
    }

    if (value.charAt(5) === "7") {
      return new PropertyValidatorError("unlucky_number", "We don't like number Seven");
    }
  }
}

export class ValidateInput {
  @f.validator(MyCustomValidator)
  code: string;

  @f
  username: string;
}

export class ValidateOutput {
  constructor(@f public username: string, @f.array(ValidationError) public errors: ValidationError[]) {}
}

const mockDatabaseCheck = async (code: string): Promise<boolean> => {
  await sleep(600);
  return true; // TODO: replace this DB call.
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const errors = validate(ValidateInput, req.body);

  const { code, username } = plainToClass(ValidateInput, req.body);

  const isCodeValid = await mockDatabaseCheck(code);

  if (!isCodeValid) {
    errors.push(new ValidationError("code", "bad_code", "Your code is not matched with us"));
  }

  if (errors.length === 0) {
    res.statusCode = 200;
  }
  if (errors.length > 0) {
    res.statusCode = 400;
  }
  res.json(new ValidateOutput(username, errors));
};
