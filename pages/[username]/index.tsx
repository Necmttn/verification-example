import Head from "next/head";
import React, { useEffect, useState, useRef, createRef } from "react";
import { Footer } from "components/footer";
import ReactInputVerificationCode from "components/verification-input";
import { Button } from "components/button";
import { post } from "utils/requests";
import { useRouter } from "next/router";
import { ValidateInput, ValidateOutput } from "../api/auth/validate";
import { ValidationError } from "@marcj/marshal";
import { Icon } from "react-icons-kit";
import { times } from "react-icons-kit/fa/times";

export default function Home() {
  const submitButtonRef = useRef<HTMLButtonElement>(null);
  const [isValid, setValid] = useState(false);
  const [value, setValue] = useState("");
  const numberRegex = /^[0-9]*$/;
  useEffect(() => {
    if (!value.includes(".") && value.match(numberRegex)) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [value]);
  useEffect(() => {
    submitButtonRef.current.focus();
  }, [isValid]);
  const router = useRouter();
  const [error, setErrors] = useState<ValidationError[]>([]);
  const handleSubmit = async () => {
    try {
      if (!isValid) {
        return;
      }
      const { data, status } = await post<ValidateInput, ValidateOutput>("/api/auth/validate", {
        username: router.query.username as string,
        code: value,
      });
      if (status === 200) {
        await router.push(`/${data.username}/success`);
      } else {
        setErrors(data.errors);
      }
    } catch (e) {}
  };
  useEffect(() => {
    setErrors([]);
  }, [value]);
  return (
    <div className={"min-h-screen"}>
      <Head>
        <title>@Blys 2 step verification</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"h-full w-full"}>
        <div className={"h-screen flex items-start justify-center"}>
          <div className={"max-w-5xl flex flex-col items-center justify-center pt-32 space-y-4"}>
            <h1 className={"text-2xl font-bold"}> Verification Code: </h1>
            <ReactInputVerificationCode
              onChange={setValue}
              length={6}
              value={value}
              placeholder={"."}
              onEnter={handleSubmit}
            />
            <Button buttonRef={submitButtonRef} disabled={!isValid} onClick={handleSubmit}>
              Submit
            </Button>
            {error.length > 0 ? (
              <div className={"bg-gray-100 rounded p-8 border-red-700 border-2 "}>
                {error.map((e) => (
                  <div className={"flex flex-row items-center justify-center"}>
                    <Icon icon={times} className={"text-red-900 font-bold"} size={32} />
                    <span className={"text-red-700"}>{e.message}</span>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
