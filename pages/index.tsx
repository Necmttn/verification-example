import Head from "next/head";
import React, { useState } from "react";
import { Footer } from "components/footer";
import Link from "next/link";
import slugify from "slugify";
import { useRouter } from "next/router";
import { sleep } from "../utils/sleep";

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const handleLogin = async () => {

    if (slugify(username) === "") {
      setUsername("JaneDoe");
      await sleep(1000);
      await router.push(`/janedoe`);
    } else {
      await router.push(`/${slugify(username)}`);
    }
  };
  return (
    <div className={"min-h-screen"}>
      <Head>
        <title>@Blys 2 step verification</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"h-full min-h-screen"}>
        <div className={"flex flex-column items-center justify-center h-full min-h-screen"}>
          <div className={"max-w-sm shadow rounded h-full w-full p-8"}>
            <div className={"text-5xl leading-tight"}>Login</div>
            <div className={"grid grid-cols-1"}>
              <input
                className={"p-2 my-4 border-2 border-gray-500 rounded"}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    handleLogin();
                  }
                }}
                placeholder={"@johndoe"}
              />
              <button className={"bg-black text-white p-4 rounded"} onClick={handleLogin}>
                {" "}
                Login{" "}
              </button>
            </div>
            <div className={"mt-20 px-4"}>
              <p className={"text-gray-500"}>
                In real life scenarios for code verification user expected to be known for backend in order to do the
                validation. in order to mimic that please login. anything would work as username.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
