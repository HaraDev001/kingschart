import { faArrowRight, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import Head from "next/head";
import Link from "next/link";
import BlogCard from "../../components/BlogCard";
import BlogsSideBar from "../../components/BlogsSideBar";
import Footer from "../../components/Footer";
import FooterAlt from "../../components/FooterALT";
import Header from "../../components/Header";
import settings from "../../settings";

export default function Blogs({ blogs }) {
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
              {blogs.data.map((element) => (
                <div key={element.id}>
                  <div className="shadow-lg">
                    <img
                      src={`${settings.ROOT}${element.attributes.Featured_Image.data[0].attributes.url}`}
                    />

                    <div className="p-5">
                      <span className="flex items-center text-[#377CFD]">
                        <FontAwesomeIcon
                          style={{ width: "15px" }}
                          icon={faCalendar}
                        />

                        <small className="mx-2">
                          {moment(`${element.attributes.createdAt}`).calendar()}
                        </small>
                      </span>
                      <h4 className="my-5 font-bold">
                        {element.attributes.Title}
                      </h4>
                      <p className="text-sm opacity-80">
                        {element.attributes.Summary}
                      </p>

                      <div className="mt-5">
                        {element.attributes.External_Link !== "" ? (
                          <a
                            target="_blank"
                            href={element.attributes.External_Link}
                          >
                            <span className="flex text-[#FD4C5C] cursor-pointer">
                              <a>Read more</a>
                              <FontAwesomeIcon
                                className="mx-5"
                                width="10"
                                icon={faArrowRight}
                              />
                            </span>
                          </a>
                        ) : (
                          <Link href="/">
                            <span className="flex text-[#FD4C5C] cursor-pointer">
                              <a>Read more</a>
                              <FontAwesomeIcon
                                className="mx-5"
                                width="10"
                                icon={faArrowRight}
                              />
                            </span>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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

export async function getServerSideProps(context) {
  const blogsResponse = await fetch(`${settings.APIURL}/blogs?populate=*`);
  const blogsData = await blogsResponse.json();

  return {
    props: {
      blogs: blogsData,
    },
  };
}
