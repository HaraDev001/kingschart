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
import {
  faArrowRight,
  faCalendar,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import Accordion from "../components/Accordion";
import axios from "axios";
import settings from "../settings";

export default function Home() {
  const [isPopupVisible, setPopupVisible] = useState(true);
  const [email, setEmail] = useState("");
  const [clicked, setclicked] = useState(false);
  const [sent, setSent] = useState(false);

  function subscribe(e) {
    e.preventDefault();
    setclicked(true);
    if (email !== "") {
      axios
        .post(`${settings.APIURL}/newsletters`, {
          data: {
            email: email,
          },
        })
        .then(function (response) {
          setSent(true);
          // setclicked(false);
        })
        .catch(function (error) {
          setSent(false);
          console.log(error);
        });
    }
  }

  return (
    <div>
      <Head>
        <title>King's Charts</title>
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

          <a
            href="https://t.me/Kingchart"
            target="_blank"
            className="text-[#F3071C] ml-3"
          >
            Join now
          </a>

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
      <div className="container mx-auto px-5 lg:px-20">
        <Header />
      </div>
      <div
        className="min-h-screen w-screen flex items-center justify-center relative"
        style={{ backgroundImage: "url('/herobg.png')" }}
      >
        <img src="/ellipse.png" className="absolute left-0 mt-36 -z-10" />

        <div className="flex lg:min-h-screen items-center w-full flex-col lg:flex-row mt-30 lg:mt-auto">
          <div className="lg:pl-20 lg:w-1/3 px-10 lg:px-0">
            <div>
              <h1 className="text-4xl lg:text-6xl text-[#000B33] font-black whitespace-normal mt-44 lg:mt-auto capitalize">
                Start your L(earn)ing journey today
              </h1>
              <p className="my-5">
                Yes, you need only 60 mins to get started with trading and it
                doesn't matter what level you are at.
              </p>

              <form
                onSubmit={subscribe}
                className={`flex bg-white shadow-lg lg:items-center lg:justify-between rounded-lg lg:px-4 ${
                  clicked === true &&
                  (email.length == 0 ? "border border-red-500" : "")
                }`}
              >
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 p-3 rounded-lg"
                  type="email"
                  placeholder="Enter your email address"
                />
                <button
                  className={`bg-[#FD4C5C] text-white px-3 py-2 rounded-lg text-sm ${
                    sent ? "opacity-50" : "hover:bg-black"
                  }`}
                  type="submit"
                  disabled={sent}
                >
                  {clicked == true ? (
                    sent == true ? (
                      <FontAwesomeIcon icon={faCheck} width="15" />
                    ) : (
                      "Try Again"
                    )
                  ) : (
                    "I'm Ready to Learn"
                  )}
                </button>
              </form>
            </div>
          </div>

          <div className="flex-1 flex justify-end lg:my-10">
            <div>
              <img className="" src="/heroimage.svg" />
            </div>
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
        <div className="bg-[#fd4c5b2d] font-black text-sm lg:text-4xl w-1/2 lg:w-1/4 lg:mx-5 p-5">
          GROW
        </div>
        <div className="bg-[#ffc83e2d] font-black text-sm lg:text-4xl w-1/2 lg:w-1/4 lg:ml-5 p-5">
          SUCCEED
        </div>
      </div>

      <div className="container flex items-center justify-center lg:justify-between px-5 lg:px-20 flex-col lg:flex-row mb-5">
        <div className="w-full lg:w-1/2 md:mt-20 grid lg:grid-cols-2 p-5 gap-4 justify-items-center">
          <a
            href="https://www.youtube.com"
            target="_blank"
            className="bg-white shadow-lg cursor-pointer px-5 text-center py-20 flex items-center justify-center flex-col"
          >
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
          </a>

          <a
            href="https://t.me/Kingchart"
            target="_blank"
            className="bg-white shadow-lg px-5 text-center  py-20 flex items-center justify-center flex-col  lg:mt-20 lg:-mb-20"
          >
            <img className="inline-block" src="/telegramicon.svg" />
            <h4 className="font-bold text-xl mt-5">Telegram Community</h4>
            <p className="px-3 opacity-60 mt-3">
              We bring together thousands of like-minded people as we endeavour
              to build a well-informed community of next-generation investors
              with the multiple telegram groups we host. Join one of the largest
              crypto trading communities and become a part of the revolution.
            </p>
          </a>

          <a
            href="https://t.me/Kingchart"
            target="_blank"
            className="bg-white shadow-lg px-5 text-center  py-20 flex items-center justify-center flex-col"
          >
            <img className="inline-block" src="/micicon.svg" />
            <h4 className="font-bold text-xl mt-5">Online MasterClass</h4>
            <p className="px-3 opacity-60 mt-3">
              With our trading course covering technical crypto analysis and the
              Elliott Wave Trading Theory, we offer our users a sure shot way to
              crack the crypto market and multiply their wealth. Register now to
              start your L(earn)ing journey today!
            </p>
          </a>

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

      {/* About */}
      <div className="h-screen flex items-center lg:justify-between lg:px-20 flex-col lg:flex-row  my-20 lg:my-5">
        <div className="lg:w-1/3 p-5 lg:my-10 lg:pr-20">
          <h2 className="text-4xl font-bold">About Us</h2>
          <p className="mt-5 opacity-70">
            The recent digitization of assets has revolutionized the financial
            space. Our aim is to bring this revolution to every keen investor
            out there by simplifying complex concepts and helping them benefit
            from this technological revolution.
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
                <a
                  target="_blank"
                  href="https://www.instagram.com/kingscharts/"
                  className="hover:text-[#FD4C5C]"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li className="w-4 mx-3 inline-block">
                <Link href="/">
                  <a className="hover:text-[#FD4C5C]">
                    <FontAwesomeIcon icon={faTelegram} />
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

      <div className="mt-40 px-5 lg:px-20">
        <h2 className="text-5xl font-bold">Crypto alerts and news</h2>
      </div>

      <div className="mt-10 mb-40 flex justify-center items-center px-5">
        <Swiper
          loop={true}
          breakpoints={{
            // when window width is >= 640px
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={10}
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

      <div className="flex items-center justify-between px-5 lg:px-20 flex-wrap">
        <div className="text-center w-1/2 lg:w-1/4 p-5 flex-1 ">
          <h3 className="text-5xl font-bold text-[#2B59FF]">40K+</h3>
          <p>Followers</p>
        </div>

        <div className="text-center w-1/2 lg:w-1/4 p-5">
          <h3 className="text-5xl font-bold text-[#FFC83E]">10+</h3>
          <p>Countries</p>
        </div>

        <div className="text-center w-1/2 lg:w-1/4 p-5">
          <h3 className="text-5xl font-bold text-[#00BB98]">500+</h3>
          <p>Premium Members</p>
        </div>

        <div className="text-center w-1/2 lg:w-1/4 p-5">
          <h3 className="text-5xl font-bold text-[#FD4C5C]">1000+</h3>
          <p>Course Students</p>
        </div>
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
          loop={true}
          breakpoints={{
            // when window width is >= 640px
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
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

      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center flex justify-center">
          <img className="w-4/6" src="/join-telegram.png" />
        </div>

        <div className="lg:w-1/2 flex justify-center items-center px-20 mt-10">
          <div>
            <h2 className="text-5xl font-bold">Join our free telegram</h2>
            <p className="my-5">
              Join our free telegram for all your questions, Find out about the
              most frequently asked questions related to our online trading
              courses
            </p>

            <div className="mt-10">
              <a target="_blank" href="https://t.me/Kingchart">
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
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto xl:px-20 px-5 pt-20 pb-40">
        <div className="mt-48 w-full">
          <div className="text-center">
            <h2 className="text-5xl font-bold">Frequently Asked Questions</h2>
            <p className="my-5">
              Haven't got your answer?{" "}
              <Link href="/">
                <a className="text-blue-500">Contact our support now</a>
              </Link>
            </p>
          </div>

          <div className="flex w-full flex-wrap">
            {[
              {
                id: 0,
                title: "What are Crypto signals?",
                content: "Throw an egg in hot oil",
              },
              {
                id: 1,
                title: "How to make crisp?",
                content: "Just do it",
              },
              {
                id: 2,
                title: "How to ride a bike?",
                content: "Paddling keeps you alive.",
              },
              {
                id: 3,
                title: "How to ride a bike?",
                content: "Paddling keeps you alive.",
              },
              {
                id: 4,
                title: "How to ride a bike?",
                content: "Paddling keeps you alive.",
              },
              {
                id: 5,
                title: "How to ride a bike?",
                content: "Paddling keeps you alive.",
              },
              {
                id: 6,
                title: "How to ride a bike?",
                content: "Paddling keeps you alive.",
              },
              {
                id: 7,
                title: "How to ride a bike?",
                content: "Paddling keeps you alive.",
              },
            ].map((element) => (
              <div
                className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 block gap-5 py-5"
                key={element.id}
              >
                <Accordion title={element.title}>{element.content}</Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>

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

      <div className="container mx-auto  px-5 lg:px-20 mt-10">
        <Footer />
      </div>
    </div>
  );
}
