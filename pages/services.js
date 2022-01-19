import Head from "next/head";
import Header from "../components/Header";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <div className="bg-[rgba(144,168,254,0.05)]">
      <Head>
        <title>King's Charts - Our Services</title>
      </Head>

      <div className="container mx-auto px-5 lg:px-20 bg-white">
      <Header />
      </div>
      <div className="container mx-auto px-5 lg:px-20">
        <h1 className="text-4xl font-bold mt-10">Our Services</h1>
      </div>
      <div className="container flex items-center justify-center lg:justify-between px-5 lg:px-20 flex-col lg:flex-row my-5">
        <div className="w-full lg:w-1/2 md:mt-20 grid lg:grid-cols-2 p-5 gap-4 justify-items-center">
          <div className="bg-white shadow-lg px-5 text-center py-20 flex items-center justify-center flex-col">
            <img className="inline-block" src="/robot-icon.svg" />
            <h4 className="font-bold text-xl mt-5">
              Free Blockchain Awareness
            </h4>
            <p className="px-3 opacity-60 mt-3">
              We are Spreading Awareness through our free Youtube educational
              content and free telegram channel.
            </p>
          </div>

          <div className="bg-white shadow-lg px-5 text-center  py-20 flex items-center justify-center flex-col lg:mt-20 lg:-mb-20">
            <img className="inline-block" src="/micicon.svg" />
            <h4 className="font-bold text-xl mt-5">Online Courses</h4>
            <p className="px-3 opacity-60 mt-3">
              We are Spreading Awareness through our free Youtube educational
              content and free telegram channel.
            </p>
          </div>

          <div className="bg-white shadow-lg px-5 text-center  py-20 flex items-center justify-center flex-col">
            <img className="inline-block" src="/telegramicon.svg" />
            <h4 className="font-bold text-xl mt-5">
              Free Blockchain Awareness
            </h4>
            <p className="px-3 opacity-60 mt-3">
              We are Spreading Awareness through our free Youtube educational
              content and free telegram channel.
            </p>
          </div>

          <div className="bg-white shadow-lg px-5 text-center  py-20 flex items-center justify-center flex-col lg:mt-20 lg:-mb-20">
            <img className="inline-block" src="/discordicon.svg" />
            <h4 className="font-bold text-xl mt-5">Discord Community</h4>
            <p className="px-3 opacity-60 mt-3">
              We are Spreading Awareness through our free Youtube educational
              content and free telegram channel.
            </p>
          </div>

          <div className="bg-white shadow-lg px-5 text-center  py-20 flex items-center justify-center flex-col">
            <img className="inline-block" src="/usericon.svg" />
            <h4 className="font-bold text-xl mt-5">
              Free Blockchain Awareness
            </h4>
            <p className="px-3 opacity-60 mt-3">
              We are Spreading Awareness through our free Youtube educational
              content and free telegram channel.
            </p>
          </div>
{/* 
          <div className="bg-white shadow-lg px-5 text-center py-8  lg:mt-10 lg:-mb-10">
            <img className="inline-block" src="/phoneicon.svg" />
            <h4 className="font-bold text-xl mt-5">Online Courses</h4>
            <p className="px-3 opacity-60 mt-3">
              We are Spreading Awareness through our free Youtube educational
              content and free telegram channel.
            </p>
          </div> */}
        </div>

        <div className="px-5 my-10 lg:p-10 lg:w-1/2">
          <h2 className="text-2xl font-black">
            Why learn to trade with King’sChart?
          </h2>
          <p className="opacity-70 mt-5">
            We are experienced in determining the personality of your brand and
            delivering a coher. We are experienced in determining the
            personality of your brand and delivering a coher
          </p>

          <p className="opacity-70 mt-5">
            If you have been wanting to take your chart analysis to the next
            level, this website is the ideal place to start. It is expected that
            you already have some basic understanding of support and resistance
            and basic trading.
          </p>

          <p className="opacity-70  mt-5">
            This course is not for you if you are a skeptic of technical
            analysis. It is not for you if you prefer to stare at business
            fundamentals and create an estimated value of a stock.
          </p>

          <div className="mt-10 ">
            <Link href="">
              <a className="px-6 py-4 bg-[#FD4C5C] text-white rounded-lg hover:bg-black">
                Get Started
              </a>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-5 lg:px-20">
      <Footer />
      </div>
    </div>
  );
}
