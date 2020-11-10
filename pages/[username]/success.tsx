import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Footer } from "../../components/footer";

const SuccessPage: React.FC = () => {
  const { query } = useRouter();

  return (
    <div className={"min-h-screen"}>
      <Head>
        <title>@Blys 2 step verification</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"h-full min-h-screen bg-gray-100"}>
        <div className={"flex flex-column items-center justify-center h-full min-h-screen"}>
          <div className={"max-w-sm shadow rounded h-full w-full p-8 flex flex-col items-center bg-white"}>
            <div className={"text-5xl leading-tight mx-auto"}>Success</div>
            <div className={"mt-8 px-4"}>
              <h3>
                Welcome back <span className={"font-bold"}>{query.username}</span>
              </h3>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SuccessPage;
