import React, { useEffect, useState } from "react";
import NavbarMini from "../components/Navbar/NavbarMini";
import SearchCardLoading from "../components/Search/SearchCardLoading";
import { BACKEND_URL } from "../constants";
import axios from "axios";
import BlogCard from "../components/BlogSection/BlogCard";
import { ReadTime, formatDate } from "../services/date";
import { Flag } from "lucide-react";
import Filter from "../components/Filter/Filter";
import FilterPopUp from "../components/Filter/FilterPopUp";

const Stories = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("Trending");
  const [filterPopUp, setFilterPopUp] = useState(false);

  const fetchLatestArticles = async (endPoint) => {
    setLoading(true);
    try {
      const res = await axios.get(BACKEND_URL + endPoint);
      const data = res.data.articles;
      setArticles(data);
    } catch (error) {
      console.log("Failed to fetch articles", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let endPoint = "/blogs";  
    switch (activeTab) {
      case "Trending":
        endPoint = "/blogs";
        break;
      case "Recent":
        endPoint = "/blogs";
        break;
      default:
        endPoint = "/blogs";
        break;
    }
    fetchLatestArticles(endPoint);
  }, [activeTab]);

  return (
    <>
      <NavbarMini />
      <div className="h-full px-8 pt-24 md:px-4 lg:px-14 2xl:px-28">
        <div className="flex h-full w-full gap-10">
          <div className="section-left flex h-full w-full max-w-5xl flex-col gap-5">
            <div className="flex w-[20rem] justify-around border-b-2 border-gray-300 md:w-full">
              <div
                className={`${
                  activeTab === "Trending"
                    ? "-mb-[2px] border-b-2 border-black"
                    : ""
                } hover:bg-secondary relative flex cursor-pointer justify-center p-1 text-xl transition duration-300`}
                onClick={() => setActiveTab("Trending")}
              >
                Trending
              </div>
              <div
                className={`${
                  activeTab === "Recent"
                    ? "-mb-[2px] border-b-2 border-black"
                    : ""
                } hover:bg-secondary relative flex cursor-pointer justify-center p-1 text-xl transition duration-300`}
                onClick={() => setActiveTab("Recent")}
              >
                Recent
              </div>
            </div>
            <div className="flex w-full items-center justify-between">
              <svg
                onClick={() => openFilterPopup()}
                className="hidden h-7 w-7 cursor-pointer rounded-lg border border-[#c1c1c1] p-[2px] transition-all hover:border-[#919191] md:block"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.3999 2.1001H18.5999C19.6999 2.1001 20.5999 3.0001 20.5999 4.1001V6.3001C20.5999 7.1001 20.0999 8.1001 19.5999 8.6001L15.2999 12.4001C14.6999 12.9001 14.2999 13.9001 14.2999 14.7001V19.0001C14.2999 19.6001 13.8999 20.4001 13.3999 20.7001L11.9999 21.6001C10.6999 22.4001 8.8999 21.5001 8.8999 19.9001V14.6001C8.8999 13.9001 8.4999 13.0001 8.0999 12.5001L4.2999 8.5001C3.7999 8.0001 3.3999 7.1001 3.3999 6.5001V4.2001C3.3999 3.0001 4.2999 2.1001 5.3999 2.1001Z"
                  stroke="#616161"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.93 2.1001L6 10.0001"
                  stroke="#616161"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {loading && articles.length === 0 ? (
              <>
                <SearchCardLoading />
                <SearchCardLoading />
                <SearchCardLoading />
                <SearchCardLoading />
                <SearchCardLoading />
              </>
            ) : (
              articles.map((item) => (
                <BlogCard
                  key={item._id}
                  id={item._id} // Pass the id to BlogCard
                  link={`/blog/${item._id}`}
                  Title={item.title}
                  imagesrc={
                    item.imageUrl === "your_image_url_here"
                      ? company
                      : item.imageUrl
                  }
                  author={item.author?.name}
                  company={item.companyName}
                  data={item.description}
                  readingTime={ReadTime(item.description)}
                  date={formatDate(item.createdAt)}
                />
              ))
            )}
            {loading && articles.length > 0 && <SearchCardLoading />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Stories;
