import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Card from "../components/card/card";


const Home: NextPage = () => {
 const {data: sessionData} = useSession()
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center bg-gradient-to-br from-rose-300 to-purple-200 ">
        {!sessionData &&(
          <button onClick={sessionData? () =>signOut() :() =>signIn('google')} className="rounded-full bg-black/10 px-10 py-3 font-semibold text-black no-underline transition hover:bg-black/20">Sign in with Google</button>
        )}
          {/* {card} */}
          {sessionData && (
            <div className="flex flex-col items-center justify-center">
              <Card />
            </div>
          )}

      </div>
    </>
  );
};

export default Home;