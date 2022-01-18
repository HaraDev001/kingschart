import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact Us - King's Chart</title>
      </Head>

      <div className="container mx-auto px-5 lg:px-20">
        <Header />
      </div>
      <div className="container mx-auto px-5 lg:px-20 bg-[#90a8fe0d]">
        <div className="pt-20">
          <h1 className="text-5xl font-bold">Contact Us</h1>
        </div>
        <div className="flex justify-between pt-20 flex-col md:flex-row">          
          <div className="w-full p-2.5 md:w-1/3">
            <div className="flex items-center justify-center w-full h-56  bg-white  rounded-lg">
              <div>
                <img className="m-auto" src="Group 591.png"/>
                <div className="text-center my-2">123 45 east road</div>
                <div className="text-center">Bengaluru</div>
              </div>
            </div>
          </div>          
          <div className="w-full p-2.5 md:w-1/3">
            <div className="flex items-center justify-center w-full h-56  bg-white  rounded-lg">
              <div>
                <img className="m-auto" src="Group 592.png"/>
                <div className="text-center my-2">+91 123456 78989</div>
                <div className="text-center">+90 653456 78989</div>
              </div>
            </div>
          </div>                   
          <div className="w-full p-2.5 md:w-1/3">
            <div className="flex items-center justify-center w-full h-56  bg-white  rounded-lg">
              <div>
                <img className="m-auto" src="Group 593.png"/>
                <div className="text-center my-2">contact@kingchart.com</div>
              </div>
            </div>
          </div>         
        </div>
        <div className="flex justify-center  flex-col md:flex-row pt-20 pb-32">
          <div className="flex justify-center items-center w-full md:w-1/2 p-2.5">
            <img className="md:pr-10  rounded-lg" src="map.png"/>
          </div>
          <div className="flex justify-center items-center bg-white w-full md:w-1/2 rounded-lg p-2.5">
            <form className="w-10/12 h-auto" action="">
              <div className="my-5">
                <input name="name" className="border rounded-lg bg-[#90a8fe0d] w-full h-16" type="email" required placeholder="Enter your name*"/>
              </div>
              <div className="my-5">
                <input name="email" className="border rounded-lg bg-[#90a8fe0d] w-full h-16" type="text" required placeholder="Enter your email address*"/>
              </div>
              <div className="my-5">
                <textarea name="massge" className="border rounded-lg bg-[#90a8fe0d] w-full h-40" required placeholder="Enter your message"/>
              </div>
              <button
                className="block p-2 my-5 hover:bg-[#00FC5C] bg-[#FD4C5C] text-white"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className ="container mx-auto  px-5 lg:px-20">
        <Footer />
      </div>
    </div>
  );
}
