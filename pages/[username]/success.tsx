import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import Confetti from "react-confetti";
import { Footer } from "../../components/footer";
import useWindowSize from "../../utils/useWindowSize";

const SuccessPage: React.FC = () => {
  const { query } = useRouter();
  const { width, height } = useWindowSize();
  return (
    <div className={"min-h-screen"}>
      <Head>
        <title>@Blys 2 step verification</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Confetti width={width} height={height} />
      <main className={"h-full min-h-screen bg-gray-100"}>
        <div className={"flex flex-column items-center justify-center h-full min-h-screen"}>
          <div className={"max-w-lg shadow rounded h-full w-full p-8 flex flex-col items-center bg-white"}>
            <div className={"text-5xl leading-tight mx-auto"}>Success</div>
            <div className={"mt-8 px-4"}>
              <h3>
                Welcome back <span className={"font-bold"}>{query.username}</span>
              </h3>
            </div>
            <div>
              <p className={"text-gray-500 mt-10"}>
                Base on the research confetti makes people <br />
                simulate the emotion of wining. which reduces the <br />
                churn rate and increases the conversion
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SuccessPage;
