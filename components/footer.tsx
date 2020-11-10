import React from "react";
import Image from "next/image";

export const Footer = () => {
 return (
   <footer className={"bottom-0 h-12 w-full absolute"}>
    <div className={"flex flex-row items-center justify-center"}>
     <a
       href="https://necmttn.com"
       target="_blank"
       rel="noopener noreferrer"
       className={"flex flex-row items-center"}
     >
      <span className={"pr-4"}>Powered by </span>
      <Image src={"/nk-logo-black-400.png"} width={40} height={40} alt="Necmttn Logo" className={"max-w-xl"} />
     </a>
    </div>
   </footer>
 )
}
