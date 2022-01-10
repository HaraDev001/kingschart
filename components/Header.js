import Link from "next/link";
import React from "react";
import { useState } from "react";

const Header = () => {
  const [isActive, setActive] = useState(false);
  return (
    <>
      <nav className="flex lg:hidden py-5 justify-between items-center absolute top-0 left-0 w-full lg:px-20 px-5">
        <div className="w-1/4">
          <img src="/logo.png" alt="" />
        </div>

        <div onClick={() => setActive(true)} className="cursor-pointer">
          <svg viewBox="0 0 100 80" width="30" height="30">
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        </div>
      </nav>

      <ul
        className={`lg:hidden ${
          isActive === true ? "flex" : "hidden"
        } flex-col items-center justify-center fixed top-0 left-0 h-screen w-screen bg-white z-50`}
      >
        <li
          onClick={() => setActive(false)}
          className="text-5xl fixed top-2 right-2 m-5 cursor-pointer select-none"
        >
          &times;
        </li>
        <li className="block mx-4 font-bold p-5 text-xl hover:text-[#FD4C5C]">
          <Link href="/courses">
            <a>Cources</a>
          </Link>
        </li>

        <li className="block mx-4 font-bold p-5 text-xl hover:text-[#FD4C5C]">
          <Link href="/">
            <a>Demos</a>
          </Link>
        </li>

        <li className="block mx-4 font-bold p-5 text-xl hover:text-[#FD4C5C]">
          <Link href="/">
            <a>Features</a>
          </Link>
        </li>

        <li className="block mx-4 font-bold p-5 text-xl hover:text-[#FD4C5C]">
          <Link href="/">
            <a>Pricing</a>
          </Link>
        </li>

        <li className="block mx-4 font-bold p-5 text-xl hover:text-[#FD4C5C]">
          <Link href="/">
            <a>Contact</a>
          </Link>
        </li>
      </ul>

      <nav className="hidden lg:flex py-5 justify-between items-center absolute top-0 left-0 w-full lg:px-20 px-5">
        <div className="w-1/4">
          <img src="/logo.png" alt="" />
        </div>
        <div className="hidden lg:block w-2/4 text-center">
          <ul>
            <li className="inline-block mx-4 font-bold">
              <Link href="/courses">
                <a>Cources</a>
              </Link>
            </li>

            <li className="inline-block mx-4 font-bold">
              <Link href="/">
                <a>Demos</a>
              </Link>
            </li>

            <li className="inline-block mx-4 font-bold">
              <Link href="/">
                <a>Features</a>
              </Link>
            </li>

            <li className="inline-block mx-4 font-bold">
              <Link href="/">
                <a>Pricing</a>
              </Link>
            </li>

            <li className="inline-block mx-4 font-bold">
              <Link href="/">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden lg:block w-1/4 text-right">
          <Link href="/auth/login">
            <a className="px-5">Login</a>
          </Link>
          <Link href="/auth/signup">
            <a className="transition-colors mr-1 px-5 py-2 bg-[#FD4C5C] text-white hover:bg-black rounded-sm">
              Sign Up
            </a>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
