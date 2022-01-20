import Head from "next/head";
import Link from "next/link";
import BlogCard from "../../components/BlogCard";
import BlogsSideBar from "../../components/BlogsSideBar";
import Footer from "../../components/Footer";
import FooterAlt from "../../components/FooterALT";
import Header from "../../components/Header";

export default function Blogs() {
  return (
    <div className="bg-[#90a8fe0d]">
      <Head>
        <title>King's Charts Blogs</title>
      </Head>

      <div className="container mx-auto px-5 lg:px-20">
        <Header />
      </div>

      <div className="py-20 container mx-auto px-5 lg:px-20">
        <h1 className="text-5xl font-bold">Blog</h1>
        <div className="flex mt-10 justify-between">
          <div className="w-3/12 pr-2">
            <BlogsSideBar />
          </div>

          <div className="w-9/12 pl-2">
            <div className="grid grid-cols-2 gap-10">
              {[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }].map(
                (element, index) => (
                  <BlogCard key={index} />
                )
              )}
            </div>

            <ul className="mt-5">
              {[
                { id: 1, url: "/" },
                { id: 2, url: "/" },
                { id: 3, url: "/" },
                { id: 4, url: "/" },
              ].map((element) => (
                <li key={element.id} className="inline-block mr-5">
                  <Link href={element.url}>
                    <a
                      className={`${
                        element.id == 1
                          ? "bg-[#FD4C5C] text-white"
                          : "border border-gray-500"
                      } p-2 h-8 w-8 flex items-center justify-center rounded-full`}
                    >
                      {element.id}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-5 lg:px-20">
        <Footer />
      </div>
    </div>
  );
}
