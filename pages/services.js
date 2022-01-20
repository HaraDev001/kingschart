import Head from "next/head";
import Header from "../components/Header";
import Link from "next/link";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

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
      <div className="container flex items-center justify-center lg:justify-between px-5 lg:px-20 flex-col lg:flex-row mb-5">
        <div className="w-full lg:w-1/2 md:mt-20 grid lg:grid-cols-2 p-5 gap-4 justify-items-center">
          <div className="bg-white shadow-lg px-5 text-center py-20 flex items-center justify-center flex-col">
            <img className="inline-block" src="/robot-icon.svg" />
            <h4 className="font-bold text-xl mt-5">
              Free Crypto Awareness Touchpoints
            </h4>
            <p className="px-3 opacity-60 mt-3">
              We strive to educate people on all things crypto as awareness is
              the first step to success. Tune in to our You tube, Instagram,
              twitter and Spotify channels and get access to free, easy to
              consume content covering everything from fundamentals of crypto to
              latest industry trends.
            </p>
          </div>

          <div className="bg-white shadow-lg px-5 text-center  py-20 flex items-center justify-center flex-col lg:mt-20 lg:-mb-20">
            <img className="inline-block" src="/micicon.svg" />
            <h4 className="font-bold text-xl mt-5">Online MasterClass</h4>
            <p className="px-3 opacity-60 mt-3">
              With our trading course covering technical crypto analysis and the
              Elliott Wave Trading Theory, we offer our users a sure shot way to
              crack the crypto market and multiply their wealth. Register now to
              start your L(earn)ing journey today!
            </p>
          </div>

          <div className="bg-white shadow-lg px-5 text-center  py-20 flex items-center justify-center flex-col">
            <img className="inline-block" src="/telegramicon.svg" />
            <h4 className="font-bold text-xl mt-5">Telegram Community</h4>
            <p className="px-3 opacity-60 mt-3">
              We bring together thousands of like-minded people as we endeavour
              to build a well-informed community of next-generation investors
              with the multiple telegram groups we host. Join one of the largest
              crypto trading communities and become a part of the revolution.
            </p>
          </div>

          <div className="bg-white shadow-lg px-5 text-center  py-20 flex items-center justify-center flex-col lg:mt-20 lg:-mb-20">
            <img className="inline-block" src="/discordicon.svg" />
            <h4 className="font-bold text-xl mt-5">Discord Community</h4>
            <p className="px-3 opacity-60 mt-3">
              Coming soon- An Integrated and detailed discord community to
              promote peer-peer learning and data sharing
            </p>
          </div>

          <div className="bg-white shadow-lg px-5 text-center  py-20 flex items-center justify-center flex-col">
            <img className="inline-block" src="/phoneicon.svg" />
            <h4 className="font-bold text-xl mt-5">Free Podcast</h4>
            <p className="px-3 opacity-60 mt-3">
              Catch us on spotify with our upcoming inhouse podcast which will
              serve as an amateur’s guide to discovering the vast world of
              crypto. From getting acquainted with the fundamentals of
              cryptoverse, to staying on top of industry updates, to hearing
              from eminent members of the crypto community, this podcast exists
              to get you all set for the future.
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

      <div className="contanier mx-auto px-5 lg:px-20 bg-[rgba(144,168,254,0.05)] pt-20 relative">
        <h1 className="text-6xl font-bold">Pricing &amp; Plans</h1>
        <img className="top-0 right-0 absolute z-0" src="/quater.svg" />
        <div className="text-center ">
          <h4 className="text-3xl font-bold mt-20 w-full lg:w-1/4 inline-block">
            We have exclusive plan in our pricing
          </h4>
          <p>Simple pricing so you can focus on your l(earn)ing</p>
        </div>

        <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
          <div className="p-5">
            <div className="shadow-lg p-10 bg-white">
              <small className="text-red-600 text-lg">FREE</small>
              <h3 className="text-5xl font-bold mt-4">FREE</h3>
              <small className="opacity-50">Per Month</small>

              <hr className="mt-20 mb-5" />

              <ul>
                <li className="flex items-center mb-5">
                  <span className="mr-2 text-purple-500">
                    <FontAwesomeIcon width={10} icon={faCheck} />
                  </span>
                  <span>Regular Market Updates</span>
                </li>

                <li className="flex items-center mb-5">
                  <span className="mr-2 text-purple-500">
                    <FontAwesomeIcon width={10} icon={faCheck} />
                  </span>
                  <span>1 Week Free Trading Call</span>
                </li>

                <li className="flex items-center mb-5">
                  <span className="mr-2 text-purple-500">
                    <FontAwesomeIcon width={10} icon={faCheck} />
                  </span>
                  <span>Access to Email Newsletter</span>
                </li>
              </ul>

              <div className="mt-20">
                <Link href="/">
                  <a className="px-6 py-3 border-2 font-bold border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                    Try Free
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="p-5">
            <div className="shadow-lg p-10 bg-white">
              <small className="text-red-600 text-lg">MASTER CLASS</small>
              <h3 className="text-5xl font-bold mt-4">
                <span className="text-sm">$</span>200
              </h3>
              <small className="opacity-50">Lifetime</small>

              <hr className="mt-20 mb-5" />

              <ul>
                <li className="flex items-center mb-5">
                  <span className="mr-2 text-purple-500">
                    <FontAwesomeIcon width={10} icon={faCheck} />
                  </span>
                  <span>Basics Of TA (Charts, Candlesticks)</span>
                </li>

                <li className="flex items-center mb-5">
                  <span className="mr-2 text-purple-500">
                    <FontAwesomeIcon width={10} icon={faCheck} />
                  </span>
                  <span>
                    Support and Resistance, Divergence and Market Structure
                  </span>
                </li>

                <li className="flex items-center mb-5">
                  <span className="mr-2 text-purple-500">
                    <FontAwesomeIcon width={10} icon={faCheck} />
                  </span>
                  <span>Fibonacci Retracements</span>
                </li>

                <li className="flex items-center mb-5">
                  <span className="mr-2 text-purple-500">
                    <FontAwesomeIcon width={10} icon={faCheck} />
                  </span>
                  <span>Advanced Elliott Wave trading patterns</span>
                </li>

                <li className="flex items-center mb-5">
                  <span className="mr-2 text-purple-500">
                    <FontAwesomeIcon width={10} icon={faCheck} />
                  </span>
                  <span>Risk Management</span>
                </li>

                <li className="flex items-center mb-5">
                  <span className="mr-2 text-purple-500">
                    <FontAwesomeIcon width={10} icon={faCheck} />
                  </span>
                  <span>Trading Setup</span>
                </li>

                <li className="flex items-center mb-5">
                  <span className="mr-2 text-purple-500">
                    <FontAwesomeIcon width={10} icon={faCheck} />
                  </span>
                  <span>Cheatsheets and Practice worksheets</span>
                </li>
              </ul>

              <div className="mt-20">
                <Link href="/">
                  <a className="px-6 py-3 border-2 font-bold border-red-500 hover:bg-white bg-red-500 hover:text-red-500 text-white">
                    Buy Now
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="p-5">
            <div className="shadow-lg p-10 bg-white">
              <small className="text-blue-600 block text-lg">PREMIUM</small>
              <h3 className="text-4xl font-bold mt-4">
                <span className="text-sm">$</span>200
              </h3>
              <small className="opacity-80">Per Month</small>

              <hr className="mt-20 mb-5" />

              <ul>
                <li className="flex items-center mb-5">
                  <span className="mr-2 text-purple-500">
                    <FontAwesomeIcon width={10} icon={faCheck} />
                  </span>
                  <span>Multiple trading calls every week</span>
                </li>

                <li className="flex items-center mb-5">
                  <span className="mr-2 text-purple-500">
                    <FontAwesomeIcon width={10} icon={faCheck} />
                  </span>
                  <span>Over 90% accuracy from the past 6 years</span>
                </li>

                <li className="flex items-center mb-5">
                  <span className="mr-2 text-purple-500">
                    <FontAwesomeIcon width={10} icon={faCheck} />
                  </span>
                  <span>Access to Q&ampl;A sessions with Mr. Khan himself</span>
                </li>

                <li className="flex items-center mb-5">
                  <span className="mr-2 text-purple-500">
                    <FontAwesomeIcon width={10} icon={faCheck} />
                  </span>
                  <span>Exclusive early-bird offers to upcoming courses.</span>
                </li>
              </ul>

              <div className="mt-20">
                <Link href="/">
                  <a className="px-6 py-3 border-2 font-bold border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                    Buy Now
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-5 lg:px-20">
        <Footer />
      </div>
    </div>
  );
}
