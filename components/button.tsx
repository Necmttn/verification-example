import React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

export interface IButtonProps {
  disabled?: boolean;
  onClick: () => void;
  buttonRef?: React.RefObject<HTMLButtonElement>;
}

const StyledButton = styled.button`
  background-color: #110148;
  ${tw`inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white hover:bg-blue-900 focus:outline-none focus:border-indigo-700 focus:shadow-outline active:bg-indigo-700 transition ease-in-out duration-150`}
  &[disabled] {
    ${tw`bg-gray-700 cursor-not-allowed`}
  }
`;

export const Button: React.FC<IButtonProps> = ({ disabled = false, children, onClick, buttonRef }) => {
  return (
    <StyledButton ref={buttonRef} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
