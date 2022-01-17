import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Contact() {
  return (
    <div className="bg-[#90a8fe0d]">
      <Head>
        <title>Contact Us - King's Chart</title>
      </Head>

      <Header />
      <div className="container mx-auto px-5 lg:px-20">
        <div className="mt-10">
          <h1 className="text-5xl font-bold">Contact Us</h1>
        </div>
      </div>
      <div className="container mx-auto  px-5 lg:px-20">
        <Footer />
      </div>
    </div>
  );
}
