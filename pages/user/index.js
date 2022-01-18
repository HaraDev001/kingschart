import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";
import FormInputBlock from "../../components/FormInputBlock";
import Header from "../../components/Header";

export default function User() {
  return (
    <>
      <Head>
        <title>King'sCharts Profile</title>
      </Head>

      <div className="container mx-auto px-5 lg:px-20">
        <Header />

        <h1>Profile</h1>
      </div>
    </>
  );
}
