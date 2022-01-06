import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faLinkedinIn,
  faTelegram,
  faTelegramPlane,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { faArrowRight, faCalendar } from "@fortawesome/free-solid-svg-icons";

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
            &times;
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
        <div className="flex lg:min-h-screen items-center w-full flex-col lg:flex-row mt-30 lg:mt-auto">
          <div className="lg:pl-20 lg:w-1/3 px-10 lg:px-0">
            <div>
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
                  className="bg-[#FD4C5C] text-white px-3 py-2 rounded-lg text-sm hover:bg-black"
                  type="submit"
                  value="I'm Ready to Learn"
                />
              </form>
            </div>
          </div>

          <div className="flex-1 flex justify-end lg:py-10">
            <div>
              <img className="" src="/hero-image.png" />
            </div>
          </div>
        </div>
        <div className="bg-[#00bb9910] absolute top-0 left-0 h-full w-full -z-10"></div>
      </div>

      <div className="container mx-auto px-5 lg:px-20 flex text-center mt-20 flex-wrap lg:flex-nowrap">
        <div className="bg-[#00bb994d] font-black text-sm lg:text-4xl w-1/2 lg:w-1/4 lg:mr-5 p-5">
          LEARN
        </div>
        <div className="bg-[#761bff36] font-black text-sm lg:text-4xl w-1/2 lg:w-1/4 lg:mx-5 p-5">
          APPLY
        </div>
        <div className="bg-[#fd4c5b2d] font-black text-sm lg:text-4xl w-1/2 lg:w-1/4 lg:mx-5 p-5">
          GROW
        </div>
        <div className="bg-[#ffc83e2d] font-black text-sm lg:text-4xl w-1/2 lg:w-1/4 lg:ml-5 p-5">
          SUCCEED
        </div>
      </div>

      <div className="h-screen flex items-center justify-center lg:px-20 flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <img className="w-full" src="/services.svg" />
        </div>

        <div className="px-5 py-10 lg:p-10 lg:w-1/2">
          <h2 className="text-2xl font-black">
            Why learn to trade with King’sChart?
          </h2>
          <p className="opacity-70">
            We are experienced in determining the personality of your brand and
            delivering a coher. We are experienced in determining the
            personality of your brand and delivering a coher
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

      {/* About */}
      <div className="h-screen flex items-center lg:justify-between lg:px-20 flex-col lg:flex-row">
        <div className="lg:w-1/3 p-5 lg:py-10 lg:pr-20">
          <h2 className="text-4xl font-bold">About Us</h2>
          <p className="mt-5 opacity-70">
            We cover every angle and capture every opportunity encircling
            graphics and identity, websites and digital experiences, advertising
            and communications. Our aim is to drive growth, build platforms that
            solve problems, and develop marketing strategies to help great
            brands create a greater impact. By merging imagination and
            technology, we use iterative problem solving to leave a real digital
            impact.
          </p>

          <div className="mt-5">
            <Link href="/">
              <a className="bg-[#FD4C5C] px-4 py-3 text-white">Know more</a>
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2 p-5">
          <div>
            <img className="cursor-pointer" src="/aboutus-image.png" alt="" />
            <ul className="mt-5">
              <li className="w-4 mr-3 inline-block">
                <Link href="/">
                  <a className="hover:text-[#FD4C5C]">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </Link>
              </li>
              <li className="w-4 mx-3 inline-block">
                <Link href="/">
                  <a className="hover:text-[#FD4C5C]">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </Link>
              </li>

              <li className="w-4 mx-3 inline-block">
                <Link href="/">
                  <a className="hover:text-[#FD4C5C]">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </a>
                </Link>
              </li>

              <li className="w-4 ml-3 inline-block">
                <Link href="/">
                  <a className="hover:text-[#FD4C5C]">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-5 lg:px-20 flex-wrap">
        <div className="text-center w-1/2 lg:w-1/4 p-5 flex-1 ">
          <h3 className="text-5xl font-bold text-[#2B59FF]">54K</h3>
          <p>Followers</p>
        </div>

        <div className="text-center w-1/2 lg:w-1/4 p-5">
          <h3 className="text-5xl font-bold text-[#FFC83E]">67</h3>
          <p>Counties</p>
        </div>

        <div className="text-center w-1/2 lg:w-1/4 p-5">
          <h3 className="text-5xl font-bold text-[#00BB98]">236</h3>
          <p>Online Lectures</p>
        </div>

        <div className="text-center w-1/2 lg:w-1/4 p-5">
          <h3 className="text-5xl font-bold text-[#FD4C5C]">22K</h3>
          <p>Current Students</p>
        </div>
      </div>

      <div className="mt-40 lg:px-20">
        <h2 className="text-5xl font-bold">Crypto alerts and news</h2>
      </div>

      <div className="mt-10 mb-40 ">
        <Swiper
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {[1, 2, 3, 4, 5, 6].map((element) => (
            <SwiperSlide className="py-10" key={element}>
              <div className="shadow-lg">
                <img src="/blog-image.png" />
                <div className="p-5">
                  <span className="flex items-center text-[#377CFD]">
                    <FontAwesomeIcon
                      style={{ width: "15px" }}
                      icon={faCalendar}
                    />

                    <small className="mx-2">{10 + element} May, 2021</small>
                  </span>
                  <h4 className="my-5 font-bold">NFT Beginner to Pro</h4>
                  <p className="text-sm opacity-80">
                    It is almost impossible to read the news without coming
                    across a lead story elections through fake social media
                    accounts...
                  </p>

                  <div className="mt-5">
                    <Link href="/">
                      <span className="flex text-[#FD4C5C] cursor-pointer">
                        <a>Read more</a>
                        <FontAwesomeIcon
                          className="mx-5"
                          width="10"
                          icon={faArrowRight}
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-40 lg:px-20">
        <h2 className="text-5xl font-bold text-center">
          What our Happy Students say
        </h2>
      </div>

      <div className="mt-10 mb-40 mx-auto container px-20">
        <Swiper
          className="pt-10"
          loop={true}
          spaceBetween={10}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {[1, 2, 3, 4, 5, 6].map((element) => (
            <SwiperSlide className="p-5" key={element}>
              <div className="flex">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://source.unsplash.com/kVg2DQTAK7c/50x50"
                />
                <div className="mx-4">
                  <h5>Shilpa Shetty</h5>
                  <small className="opacity-80">Commerce Student</small>
                </div>
              </div>

              <p className="mt-5">
                OMG! I cannot believe that I have got a brand new landing page
                after getting appmax. It was super easy to edit and publish.
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex">
        <div className="w-1/2 text-center flex justify-center">
          <img className="w-4/6" src="/join-telegram.png" />
        </div>

        <div className="w-1/2 flex justify-center items-center px-20">
          <div>
            <h2 className="text-5xl font-bold">Join our free telegram</h2>
            <p className="my-5">
              Join our free telegram for all your questions, Find out about the
              most frequently asked questions related to our online trading
              courses
            </p>

            <div className="mt-10">
              <Link href="/">
                <div className="flex">
                  <a className="px-10 cursor-pointer  py-5 hover:bg-black rounded-full bg-[#FD4C5C] text-white">
                    Join Now
                  </a>
                  <FontAwesomeIcon
                    className="mx-5"
                    width="30"
                    icon={faTelegramPlane}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-10">
        <Footer />
      </div>
    </div>
  );
}
