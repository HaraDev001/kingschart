import Link from "next/link";
import React from "react";

const Header = () => {
  

  return (
  <nav className="py-5 flex justify-between items-center absolute top-0 left-0 w-full lg:px-20 px-5">
    <div className="w-1/4">
      <img src="/logo.png" alt="" />
    </div>
    <div className="hidden lg:block w-2/4 text-center">
      <ul>
        <li className="inline-block mx-4 font-bold">
          <Link href="/">
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
      <Link href="/">
        <a className="px-5">
          Login
        </a>
      </Link>
      <Link href="/">
        <a className="transition-colors mr-1 px-5 py-2 bg-[#FD4C5C] text-white hover:bg-black rounded-sm">
          Sign Up
        </a>
      </Link>
    </div>
  </nav>
)}

export default Header;
