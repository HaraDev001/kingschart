import Head from "next/head";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>KingsChart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-10">
        
      </div>

      <div className="container mx-auto px-10">
        <Footer />
      </div>
    </div>
  );
}
