import React from "react";
import { Link } from "react-router-dom";
import { CiBookmark, CiHeart } from "react-icons/ci";
import Author from "./_Child/Author";
import ReactQuill from "react-quill";

import user3 from "../../assets/images/user3.png";
import { formatDate } from "../../services/date";

const BlogCard = ({
  link,
  Title,
  imagesrc,
  author,
  company,
  data,
  readingTime,
  date,
}) => {
  const viewDate = formatDate(date);
  return (
    <>
      <Link to={link} className="pb-2 border-b">
        <div className="flex flex-row md:flex-col md:gap-2 w-full h-full justify-center items-center gap-4 p-1">
          <div
            className="container md:w-full w-[280px] h-[180px]  rounded-lg banner-image"
            style={{ backgroundImage: `url(${imagesrc})` }}
          ></div>
          {/* <img className='banner-image lg:w-[280px] w-[220px] md:w-[200px] x-sm:w-full h-full rounded-lg object-cover' src={imagesrc} alt="Banner Image" /> */}
          <div
            style={{ width: "min-content" }}
            className="data flex items-start lg:justify-start justify-between h-full flex-col grow lg:gap-2 gap-2 x-sm:gap-1 p-1 sm:self-start "
          >
            <h1 className="text-[24px] sm:text-[20px] font-[500] x-sm:text-[16px] text-gray-700 hover:text-gray-800">
              {Title}
            </h1>
            <Author
          person={{
            name: author,
            company: company,
          }}
        />
        {/* found it difficult to change the short description into rendered markdown so removed it as of now */}
            <div className="md:hidden flex justify-between w-full items-center">
              <h2 className="text-gray-500 font-[400] x-sm:text-[13px] ">
                <span className="md:hidden">{readingTime} mins read • </span>
                {viewDate}
              </h2>
              <div className="flex gap-2">
                <CiHeart color="#888888" />
                <CiBookmark color="#888888" />
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex hidden justify-between w-full items-center px-4">
          <h2 className="text-gray-500 font-[400] x-sm:text-[13px] ">
            <span className="md:hidden">{readingTime} mins read • </span>
            {viewDate}
          </h2>
          <div className="flex gap-2">
            <CiHeart color="#888888" />
            <CiBookmark color="#888888" />
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
