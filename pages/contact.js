import Head from "next/head";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import axios from "axios";
import settings from "../settings";
import { useRouter } from "next/router";

export default function Contact() {
  const [message, setMessage] = useState({
    name: "",
    email: "",
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
          Message: message.message
        },
      })
      .then(function (response) {
        alert("Thanks. We'll get in touch soon.")
        router.push('/contact')
      })
      .catch(function (error) {
        alert("Try Again Later.")
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
        <div className="flex justify-between pt-20 flex-col md:flex-row">
          <div className="w-full p-2.5 md:w-1/3">
            <div className="flex items-center justify-center w-full h-56  bg-white shadow-lg rounded-lg">
              <div>
                <img className="m-auto" src="Group 591.png" />
                <div className="text-center my-2">123 45 east road</div>
                <div className="text-center">Bengaluru</div>
              </div>
            </div>
          </div>
          <div className="w-full p-2.5 md:w-1/3">
            <div className="flex items-center justify-center w-full h-56  bg-white  shadow-lg  rounded-lg">
              <div>
                <img className="m-auto" src="Group 592.png" />
                <div className="text-center my-2">+91 123456 78989</div>
                <div className="text-center">+90 653456 78989</div>
              </div>
            </div>
          </div>
          <div className="w-full p-2.5 md:w-1/3">
            <div className="flex items-center justify-center w-full h-56  shadow-lg  bg-white  rounded-lg">
              <div>
                <img className="m-auto" src="Group 593.png" />
                <div className="text-center my-2">contact@kingchart.com</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center  flex-col md:flex-row pt-20 pb-32">
          <div className="flex justify-center items-center w-full md:w-1/2 p-2.5">
            <img className="md:pr-10  rounded-lg" src="map.png" />
          </div>
          <div className="flex justify-center items-center bg-white w-full md:w-1/2 rounded-lg p-2.5  shadow-lg">
            <form method="post" onSubmit={send} className="w-10/12 h-auto ">
              <div className="my-5">
                <input
                  value={message.name}
                  onChange={(e) =>
                    setMessage({
                      name: e.target.value,
                      email: message.email,
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
                <textarea
                  value={message.message}
                  onChange={(e) =>
                    setMessage({
                      name: message.name,
                      email: message.email,
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
      <div className="container mx-auto  px-5 lg:px-20">
        <Footer />
      </div>
    </div>
  );
}
