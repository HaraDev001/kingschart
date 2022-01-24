import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useState } from "react/cjs/react.development";
import FormInputBlock from "../../components/FormInputBlock";
import settings from "../../settings";

export default function Login() {
  const router = useRouter();

  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });

  async function login(event) {
    event.preventDefault();

    const logininfo = {
      identifier: payload.email,
      password: payload.password,
    };

    const login = await fetch(`${settings.APIURL}/auth/local`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(logininfo),
    });

    const loginResponse = await login.json();

    if (loginResponse.jwt || loginResponse.jwt != "") {
      localStorage.setItem("token", loginResponse.jwt);
      localStorage.setItem("username", loginResponse.user.username);
      localStorage.setItem("email", loginResponse.user.email);
      localStorage.setItem("uid", loginResponse.user.id);
      router.push("/services");
    } else {
      alert("Try Again Later");
    }
  }

  return (
    <div className="flex w-screen h-screen items-center">
      <Head>
        <title>Login in</title>
      </Head>
      <div className="h-full w-1/2 overflow-hidden hidden lg:block xl:block">
        <img className="w-auto h-full" src="/login.png" alt="" />
      </div>

      <div className="h-full xl:w-1/2 flex items-center justify-center p-10">
        <div>
          <Link href="/">
            <small className="my-5 cursor-pointer flex items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-arrow-narrow-left"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <line x1="5" y1="12" x2="9" y2="16" />
                  <line x1="5" y1="12" x2="9" y2="8" />
                </svg>
              </span>
              <span className="mx-4">Home</span>
            </small>
          </Link>
          <h1 className="font-extrabold text-4xl">Login to you account</h1>
          <p className="mt-5">
            <small className="opacity-80">Don’t have an account?</small>{" "}
            <Link href="/auth/signup">
              <a className="underline text-[#FD4C5C]">Create an account</a>
            </Link>
          </p>

          <form onSubmit={login}>
            <FormInputBlock label="Email Address" required>
              <input
                value={payload.email}
                onChange={(e) =>
                  setPayload({
                    email: e.target.value,
                    password: payload.password,
                  })
                }
                className="border rounded-lg w-full p-2"
                type="email"
              />
            </FormInputBlock>

            <div>
              <FormInputBlock label="Password" required>
                <input
                  value={payload.password}
                  onChange={(e) =>
                    setPayload({
                      email: payload.email,
                      password: e.target.value,
                    })
                  }
                  className="border rounded-lg w-full p-2"
                  type="password"
                />
              </FormInputBlock>
            </div>

            <div className="flex w-full items-center my-4">
              <div>
                <input type="checkbox" name="" id="" />
                <small className="px-2 opacity-80">Remember me</small>
              </div>

              <Link href="/auth/reset">
                <a className="mx-2">
                  <small className="opacity-80">Forgot Password?</small>
                </a>
              </Link>
            </div>

            <button
              className="block w-full p-2 mt-2 hover:bg-black bg-[#FD4C5C] text-white"
              type="submit"
            >
              Login Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// export async function getServerSideProps(context) {

//   return {
//     props: {
//       loginResponse
//     },
//   };
// }
