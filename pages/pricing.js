import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";
import FooterALT from "../components/FooterALT";
import Header from "../components/Header";

export default function Pricing() {
  return (
    <div>
      <Head>
        <title>KingsChart</title>
        <link rel="icon" href="/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="container mx-auto px-5 lg:px-20">
        <Header />
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

      <div className="container lg:px-20 px-5 mx-auto">
        <div className="container mx-auto px-5 xl:px-20 relative hidden xl:block">
          <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <h2 className="hidden md:block xl:text-4xl font-bold text-white">
              Want us to email you about special offers &amp; updates?
            </h2>
            <form className="flex flex-col xl:flex-row justify-center items-center xl:bg-white rounded-md mt-2 w-full lg:w-3/4">
              <input
                className="p-3 w-full rounded-md"
                type="email"
                placeholder="Enter your email"
              />
              <input
                className="w-full xl:w-1/4 bg-[#FD4C5C] text-white p-2 mr-1 rounded-md"
                type="submit"
                value="Subscribe Now"
              />
            </form>
          </div>
          <img src="/newsletter.png" />
        </div>

        
        <FooterALT />
      </div>
    </div>
  );
}
