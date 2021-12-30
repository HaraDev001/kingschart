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
        <link rel="icon" href="/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {isPopupVisible ? (
        <div
          style={{
            marginTop: "5em",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: "10",
          }}
          className="shadow-lg flex p-5 fixed bg-white rounded-lg items-center w-5/6 lg:w-auto"
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
        className="min-h-screen w-screen flex items-center justify-center relative"
        style={{ backgroundImage: "url('/herobg.png')" }}
      >
        <img src="/ellipse.png" className="absolute left-0 mt-36 -z-10" />
        <Header />
        <div className="flex min-h-screen items-center w-full flex-col lg:flex-row mt-36 lg:mt-auto">
          <div className="lg:pl-20 lg:w-1/3">
            <div className="mx-10">
              <h1 className="text-4xl lg:text-6xl text-[#000B33] font-black whitespace-normal lg:mt-auto">
                I will teach you trade in 60 minutes
              </h1>
              <p>
                Yes, you needonly 60 mins to get started with trading and it
                doesn't matter what level you are at.
              </p>
              <form className="flex bg-white lg:items-center lg:justify-between rounded-lg mt-5 lg:px-4">
                <input
                  className="flex-1 p-3 rounded-lg"
                  type="text"
                  placeholder="Enter your email address"
                />
                <input
                  className="bg-[#FD4C5C] text-white px-3 py-2 rounded-lg text-sm"
                  type="submit"
                  value="I'm Ready to Learn"
                />
              </form>
            </div>
          </div>

          <div className="flex-1 flex justify-end lg:py-10">
            <img className="max-w-full h-auto" src="/hero-image.png" />
          </div>
        </div>
        <div className="bg-[#00bb9910] absolute top-0 left-0 h-full w-full -z-10"></div>
      </div>

      <div className="container mx-auto px-5 lg:px-20 flex text-center my-20 flex-wrap lg:flex-nowrap">
        <div className="bg-[#00bb994d] font-black text-sm lg:text-4xl w-1/2 lg:w-1/4 lg:mr-5 p-5">
          LEARN
        </div>
        <div className="bg-[#761bff36] font-black text-sm lg:text-4xl w-1/2 lg:w-1/4 lg:mx-5 p-5">
          APPLY
        </div>
        <div className="bg-[#00bb994d] font-black text-sm lg:text-4xl w-1/2 lg:w-1/4 lg:mx-5 p-5">
          GROW
        </div>
        <div className="bg-[#00bb994d] font-black text-sm lg:text-4xl w-1/2 lg:w-1/4 lg:ml-5 p-5">
          SUCCEED
        </div>
      </div>

      <div className="h-screen flex items-center justify-center lg:px-20 flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <img className="w-full" src="/services.svg" />
        </div>

        <div className="px-5 lg:p-10 lg:w-1/2">
          <h2 className="text-2xl font-black">
            Why learn to trade with King’sChart?
          </h2>
          <p>
            We are experienced in determining the personality of your brand and
            delivering a coher. We are experienced in determining the
            personality of your brand and delivering a coher
          </p>

          <div className="mt-10 ">
            <Link href="">
              <a className="px-6 py-4 bg-[#FD4C5C] text-white rounded-lg">
                Get Started
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-10">
        <Footer />
      </div>
    </div>
  );
}
