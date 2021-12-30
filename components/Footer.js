import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <div>
    <div className="flex justify-between pt-20 flex-col lg:flex-row">
      <div className="lg:w-1/4 pr-5">
        <img src="/text-logo.png" alt="" />
        <p className="mt-5">
          There are many variations of passages of Lorem the Ipsum available but
          it is the majority of suffered that a alteration in that some dummy
          text.
        </p>

        <ul className="mt-5">
          <li className="w-4 mr-3 inline-block">
            <Link href="/">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </li>
          <li className="w-4 mx-3 inline-block">
            <Link href="/">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
          </li>

          <li className="w-4 mx-3 inline-block">
            <Link href="/">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </Link>
          </li>

          <li className="w-4 ml-3 inline-block">
            <Link href="/">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </li>
        </ul>
      </div>

      <div className="p-5 lg:flex-row-reversew-1/4">
        <ul>
          <li className="font-bold mb-3">Education</li>

          <li>
            <Link href="/">
              <a>Kings Academy</a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a>Webinars</a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a>E-learning</a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a>Crypto</a>
            </Link>
          </li>
        </ul>
      </div>

      <div className="p-5 lg:w-1/4">
        <ul className="text-[#000B33]">
          <li className="font-bold mb-3">Quick Links</li>

          <li>
            <Link href="/">
              <a>Registration</a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a>Make saving Reviews</a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a>Blogs</a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a>Contact us</a>
            </Link>
          </li>
        </ul>
      </div>

      <div className="p-5 lg:w-1/4">
        <ul className="text-[#000B33]">
          <li className="font-bold mb-3">Our Support Download</li>

          <li>456789123</li>

          <li>Mumbai, India</li>

          <li>
            <a href="mailto:Info@kingschart.com ">Info@kingschart.com </a>
          </li>
        </ul>

        <div className="mt-10">
          <Link href="/">
            <a className="transition-colors mr-1 px-5 py-2 bg-[#FD4C5C] text-white hover:bg-black rounded-sm">
              Register
            </a>
          </Link>
          <Link href="/">
            <a className="transition-colors ml-1 px-5 py-2 hover:bg-[#FD4C5C] text-white bg-black rounded-sm">
              Telegram
            </a>
          </Link>
        </div>
      </div>
    </div>

    <div className="mt-10 text-center text-[#000B33] text-sm"> 
        <hr className="opacity-10" />
        <p className="py-10">© 2021 King’s Chart All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
