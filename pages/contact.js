import Head from "next/head";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import axios from "axios";
import settings from "../settings";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    telegram: "",
    message: "",
  });

  const router = useRouter();

  function send(e) {
    e.preventDefault();

    axios
      .post(`${settings.APIURL}/messages`, {
        data: {
          Name: message.name,
          From: message.email,
          telegram: message.telegram,
          Message: message.message,
        },
      })
      .then(function (response) {
        alert("Thanks. We'll get in touch soon.");
        router.push("/contact");
      })
      .catch(function (error) {
        alert("Try Again Later.");
      });
  }
  // /api/messages
  return (
    <div className="bg-[#90a8fe0d]">
      <Head>
        <title>Contact Us - King's Chart</title>
      </Head>

      <div className="bg-white">
        <div className="container mx-auto px-5 lg:px-20">
          <Header />
        </div>
      </div>
      <div className="container mx-auto px-5 lg:px-20">
        <div className="pt-20">
          <h1 className="text-5xl font-bold">Contact Us</h1>
        </div>

        <div className="flex justify-center  flex-col md:flex-row pt-20 pb-32">
          <div className="flex justify-center items-center w-full md:w-1/2 p-2.5">
            <img
              className="md:pr-10  rounded-lg"
              src="https://images.unsplash.com/photo-1508780709619-79562169bc64?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8d29ya3x8fHx8fDE2NDI5Mzg4ODk&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500"
            />
          </div>
          <div className="flex justify-center items-center flex-col bg-white w-full md:w-1/2 rounded-lg p-2.5 py-10 shadow-lg">
            <div className="w-10/12 h-auto">
              <ul>
                <li>
                  <a href="mailto:contact@kingscharts.io" className="flex">
                    <FontAwesomeIcon
                      className="text-[#FD4C5C]"
                      icon={faEnvelope}
                      height={25}
                    />
                    <span className="mx-2 opacity-80">
                      contact@kingscharts.io
                    </span>
                  </a>
                </li>

                <li className="mt-5">
                  <a
                    href="https://t.me/Kingchart"
                    target="_blank"
                    className="flex"
                  >
                    <FontAwesomeIcon
                      className="text-[#FD4C5C]"
                      icon={faTelegramPlane}
                      height={25}
                    />
                    <span className="mx-2 opacity-80">@kingscharts</span>
                  </a>
                </li>
              </ul>
              <form method="post" onSubmit={send} className="w-full">
                <div className="my-5">
                  <input
                    value={message.name}
                    onChange={(e) =>
                      setMessage({
                        name: e.target.value,
                        email: message.email,
                        telegram: e.target.value,
                        message: message.message,
                      })
                    }
                    name="name"
                    className="border rounded-lg bg-[#90a8fe0d] w-full p-3"
                    type="text"
                    required
                    placeholder="Enter your name*"
                  />
                </div>
                <div className="my-5">
                  <input
                    value={message.email}
                    onChange={(e) =>
                      setMessage({
                        name: message.name,
                        email: e.target.value,
                        telegram: message.telegram,
                        message: message.message,
                      })
                    }
                    name="email"
                    className="border rounded-lg bg-[#90a8fe0d] w-full  p-3"
                    type="email"
                    required
                    placeholder="Enter your email address*"
                  />
                </div>

                <div className="my-5">
                  <input
                    value={message.telegram}
                    onChange={(e) =>
                      setMessage({
                        name: message.name,
                        email: message.email,
                        telegram: e.target.value,
                        message: message.message,
                      })
                    }
                    name="telegram"
                    className="border rounded-lg bg-[#90a8fe0d] w-full  p-3"
                    type="text"
                    pattern=".*\B@(?=\w{5,64}\b)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*.*"
                    required
                    placeholder="Enter your Telegram Id*"
                  />
                </div>

                <div className="my-5">
                  <textarea
                    value={message.message}
                    onChange={(e) =>
                      setMessage({
                        name: message.name,
                        email: message.email,
                        telegram: message.telegram,
                        message: e.target.value,
                      })
                    }
                    name="massge"
                    className="border rounded-lg bg-[#90a8fe0d] w-full  p-3 h-40"
                    required
                    placeholder="Enter your message"
                  />
                </div>

                <button
                  className="block p-2 my-5 hover:bg-black bg-[#FD4C5C] text-white"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto  px-5 lg:px-20">
        <Footer />
      </div>
    </div>
  );
}
