import {
  faArrowLeft,
  faCog,
  faQuestionCircle,
  faSignOutAlt,
  faStar,
  faUsers,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Error from "next/error";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react/cjs/react.development";
import FormInputBlock from "../../components/FormInputBlock";

export default function User() {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    localStorage.removeItem("uid");
    router.push("/auth/login");
  };

  // useEffect(() => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("token") === null) {
      // setLogged(false);
    } else {
      // setLogged(true);
    }
  }
  // });

  return (
    <div className="flex w-screen h-screen items-center">
      <Head>
        <title>Register Today on KingsChart!</title>
      </Head>
      <div className="h-full w-1/2 overflow-hidden hidden lg:block xl:block">
        <img className="w-auto h-full" src="/login.png" alt="" />
      </div>

      <div className="fixed top-0 left-0 w-screen bg-white">
        <div className="container mx-auto px-5">
          <Header />
        </div>
      </div>
      <div className="flex h-screen bg-[rgba(144,168,254,0.05)]">
        <div className="w-2/12 p-6 h-full flex flex-col justify-between">
          <div>
            <h1 className="text-4xl mt-20 font-bold">Dashboard</h1>
            <ul className="mt-5">
              <li className="mb-5">
                <Link href="">
                  <div className="flex">
                    <FontAwesomeIcon width={20} icon={faWallet} />
                    <span className="ml-2">My Purchases</span>
                  </div>
                </Link>
              </li>

              <li className="mb-5">
                <Link href="">
                  <div className="flex">
                    <FontAwesomeIcon width={20} icon={faCog} />
                    <span className="ml-2">Account Settings</span>
                  </div>
                </Link>
              </li>

              <li className="mb-5">
                <Link href="">
                  <div className="flex">
                    <FontAwesomeIcon width={20} icon={faStar} />
                    <span className="ml-2">Saved Courses</span>
                  </div>
                </Link>
              </li>

              <li className="mb-5">
                <Link href="">
                  <div className="flex">
                    <FontAwesomeIcon width={20} icon={faUsers} />
                    <span className="ml-2">Refer a friend</span>
                  </div>
                </Link>
              </li>

              <li className="mb-5">
                <Link href="">
                  <div className="flex">
                    <FontAwesomeIcon width={20} icon={faQuestionCircle} />
                    <span className="ml-2">Help</span>
                  </div>
                </Link>
              </li>

              <li className="mb-5">
                <a className="cursor-pointer" onClick={logout}>
                  <div className="flex">
                    <FontAwesomeIcon width={20} icon={faSignOutAlt} />
                    <span className="ml-2">Log Out</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <img
              className="rounded-full inline-block"
              src="https://source.unsplash.com/50x50"
            />
            <p className="ml-3">{"Test"}</p>
          </div>
        </div>

        <div className="w-8/12 ">
          <h2 className="font-bold mt-36 text-xl">Enrolled Courses</h2>
        </div>
        <div className="w-2/12 bg-blue-300 p-6"></div>
      </div>
    </div>
  );
}
