import Link from "next/link";
import React from "react";

const HeaderALT = () => {
  return (
    <nav className="py-5 flex justify-between items-center absolute top-0 left-0 w-full lg:px-20 px-5">
      <div className="w-1/4">
        <img src="/logo.png" alt="" />
      </div>
      <div className="hidden lg:block w-2/4 text-center">
        <ul>
          <li className="inline-block mx-4 font-bold">
            <Link href="/courses">
              <a>On Going</a>
            </Link>
          </li>

          <li className="inline-block mx-4 font-bold">
            <Link href="/">
              <a>Recorded</a>
            </Link>
          </li>

          <li className="inline-block mx-4 font-bold">
            <Link href="/">
              <a>Live</a>
            </Link>
          </li>

          <li className="inline-block mx-4 font-bold">
            <Link href="/">
              <a>Masterclass</a>
            </Link>
          </li>
        </ul>
      </div>

      <div className="hidden lg:block w-1/4 text-right">
        <Link href="/auth/login">
          <a className="px-5 bg-[#FD4C5C] text-white py-4">My Courses</a>
        </Link>
      </div>
    </nav>
  );
};

export default HeaderALT;
