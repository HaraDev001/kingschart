import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Link from "next/link";

import { useState } from "react";

export default function Home() {
  const [isPopupVisible, setPopupVisible] = useState(true);

  return (
    <div>
      <Head>
        <title>KingsChart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isPopupVisible ? (
        <div
          style={{
            marginTop: "5em",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: "10",
          }}
          className="shadow flex p-5 fixed bg-white rounded-lg items-center"
        >
          <p>Join our free telegram group to get a free weekly trade call</p>
          <Link href="/">
            <a className="text-[#F3071C] ml-3">Join now</a>
          </Link>
          <span
            onClick={() => setPopupVisible(false)}
            className="text-xl ml-5 cursor-pointer"
          >
            {" "}
            &times;{" "}
          </span>
        </div>
      ) : (
        ""
      )}

      <div
        className="h-screen flex relative"
        style={{ backgroundImage: "url('/herobg.png')" }}
      >
        <img src="/ellipse.png" className="absolute left-0 mt-36" />
        <Header />
        <div className="flex h-screen items-center w-full ">
          <div className="pl-20 w-1/3">
            <h1 className="text-6xl text-[#000B33] font-black">
              I will teach you trade in 60 minutes
            </h1>
            <p>
              Yes, you needonly 60 mins to get started with trading and it
              doesn't matter what level you are at.
            </p>
            <form className="flex bg-white items-center justify-between rounded-lg mt-5 px-4">
              <input
                className="flex-1 px-2 py-6 rounded-lg"
                type="text"
                placeholder="Enter your email address"
              />
              <input
                className="bg-[#FD4C5C] text-white py-3 px-4 rounded-lg"
                type="submit"
                value="I'm Ready to Learn"
              />
            </form>
          </div>

          <div className="flex-1 flex justify-end py-10">
            <img className="w-2/3" src="/hero-image.png" />
          </div>
        </div>
        <div className="bg-[#00bb9910] absolute top-0 left-0 h-full w-full -z-10"></div>
      </div>

      <div className="container mx-auto px-20 flex text-center py-20">
        <div className="bg-[#00bb994d] font-black text-4xl w-1/4 mr-5 p-5">
          {" "}
          LEARN
        </div>
        <div className="bg-[#761bff36] font-black text-4xl w-1/4 mx-5 p-5">
          {" "}
          APPLY
        </div>
        <div className="bg-[#00bb994d] font-black text-4xl w-1/4 mx-5 p-5">
          {" "}
          GROW
        </div>
        <div className="bg-[#00bb994d] font-black text-4xl w-1/4 ml-5 p-5">
          {" "}
          SUCCEED
        </div>
      </div>

      <div className="h-screen flex items-center justify-center px-20">
        <div className="w-1/2 text-left ">
          <img src="/services.svg" />
        </div>

        <div className="p-10 w-1/2">
          <h2 className="text-4xl font-black">
            Why learn to trade with King’sChart?
          </h2>
          <p>
            We are experienced in determining the personality of your brand and
            delivering a coher. We are experienced in determining the
            personality of your brand and delivering a coher
          </p>

          <div className="mt-10 ">
            <Link href=""><a className="px-6 py-4 bg-[#FD4C5C] text-white rounded-lg">Get Started</a></Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-10">
        <Footer />
      </div>
    </div>
  );
}
