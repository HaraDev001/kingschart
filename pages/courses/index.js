import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import HeaderALT from "../../components/HeaderALT";

export default function Courses() {
  return (
    <div>
      <Head>
        <title>Courses that KingsChart offers</title>
      </Head>

      <HeaderALT />
      <div className="mt-36 lg:px-20 flex w-full justify-between">
        <h2 className="text-4xl font-bold">Courses</h2>
        <input
          className="border bg-[#F5F9FF] border-[#347AF6] rounded-md px-4 w-1/3"
          placeholder="Try Crypto"
          type="text"
        />
      </div>
    </div>
  );
}
