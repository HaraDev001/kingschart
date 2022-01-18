import Head from "next/head";
import Header from "../components/Header";

export default function Services() {
  return (
    <div>
      <Head>
        <title>King's Charts - Our Services</title>
      </Head>

      <div className="container mx-auto px-5 lg:px-20">
        <Header />
        <h1 className="text-6xl text-center font-bold mt-20">
          Content Loading
        </h1>
      </div>
    </div>
  );
}
