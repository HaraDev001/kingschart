import { faFantasyFlightGames } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowLeft,
  faChartBar,
  faChartLine,
  faClock,
  faHeart,
  faStar,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
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

      <div className="mt-20 lg:px-20 grid grid-cols-4 justify-between">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((element) => (
          <div className="m-2 shadow-lg rounded-lg" key={element}>
            <img className="w-full" src="/course.png" />
            <div className="p-5">
              <div className="flex items-center">
                <h2 className="font-bold text-xl mr-4">
                  Introduction to Bitcoin &amp; how to invest ?
                </h2>
                <span className="text-white bg-gray-300 hover:bg-[#FD4C5C] p-3 h-10 w-10 rounded-full inline-block cursor-pointer">
                  <FontAwesomeIcon width="15" icon={faHeart} />
                </span>
              </div>
              <small className="opacity-80">Karan Sharma</small>
              <ul className="text-blue-700">
                <li className="inline-block text-sm">Masterclass</li>
                <li className="inline-block text-sm mx-2">|</li>
                <li className="inline-block text-sm">Downloadable Content</li>
              </ul>
              <p className="text-blue-700">
                $200 <small className="line-through text-gray-700">$300</small>
              </p>
              <div className="flex items-center mt-4">
                <ul>
                  {[1, 2, 3, 4, 5, 6].map((element) => (
                    <li className="inline-block mr-1" key={element}>
                      <FontAwesomeIcon
                        className="text-yellow-400"
                        width="20"
                        icon={faStar}
                      />
                    </li>
                  ))}
                </ul>
                <span className="text-gray-500 ml-2">4.9 (7990)</span>
              </div>
              <div className="flex">
                <div className="p-5 text-center">
                  <FontAwesomeIcon icon={faClock} />
                  <p>
                    <small>120 mins</small>
                  </p>
                </div>

                <div className="p-5 text-center">
                  <FontAwesomeIcon icon={faChartBar} />
                  <p>
                    <small>Beginner</small>
                  </p>
                </div>

                <div className="p-5 text-center">
                  <FontAwesomeIcon icon={faUsers} />
                  <p>
                    <small>2.6K enrolled</small>
                  </p>
                </div>
              </div>
              <a className="bg-[#FD4C5C] text-white rounded-md py-3 block text-center hover:bg-black cursor-pointer">
                Join Course
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
