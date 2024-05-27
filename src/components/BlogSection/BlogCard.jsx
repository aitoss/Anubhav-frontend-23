import React from 'react';
import {Link} from 'react-router-dom';
import companyImage from '../../assets/images/company.png';
import Author from './_Child/Author';
import {CiBookmark} from 'react-icons/ci';
import {CiHeart} from 'react-icons/ci';
import user3 from '../../assets/images/user3.png';
import ReactQuill from 'react-quill';
import {formatDate} from '../../services/date';


const BlogCard = ({link, Title, imagesrc, author, company, data, readingTime, date}) => {
  const viewDate = formatDate(date);
  return (
    <>
      <Link to={link} className="pb-2 border-b" >
        <div className="flex flex-row x-sm:flex-col w-full h-full justify-center items-center lg:gap-10 gap-4 p-1">
          <div className="container w-[280px] h-[187px]  rounded-lg banner-image" style={{backgroundImage: `url(${imagesrc})` }}></div>
          {/* <img className='banner-image lg:w-[280px] w-[220px] md:w-[200px] x-sm:w-full h-full rounded-lg object-cover' src={imagesrc} alt="Banner Image" /> */}
          <div className="data flex items-start lg:justify-start justify-between h-full flex-col grow lg:gap-2 gap-2 x-sm:gap-1 p-1 sm:self-start ">
            <h1 className="text-[24px] sm:text-[20px] font-[500] x-sm:text-[16px] text-gray-700 hover:text-gray-800">
              {Title}
            </h1>
            <div className="author flex items-center x-sm:gap-1 gap-2">
              <img src={user3} className="rounded-full w-6 h-6 x-sm:w-5 x-sm:h-5" alt="User Avatar" />
              <a href="#" className="font-[400] x-sm:text-[13px]  hover:text-gray-600 text-gray-700">
                {author}
              </a>
              <span className="text-[#a0a0a0] font-[400]">|</span>
              <a href="#" className="font-[400] x-sm:text-[13px] text-gray-500">
                {company}
              </a>
            </div>
            <p className="font-[300] text-[#616161] h-[50px] overflow-ellipsis line-clamp-2 justify-center">
              <ReactQuill className="preview-render" value={data} theme="bubble" readOnly/>
              {/* {data}  */}
            </p>
            <div className="md:hidden flex justify-between w-full items-center">
              <h2 className="text-gray-500 font-[400] x-sm:text-[13px] "><span className='md:hidden'>{readingTime} mins read • </span>{viewDate}</h2>
              <div className="flex gap-2">
                <CiHeart color="#888888" />
                <CiBookmark color="#888888" />
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex hidden justify-between w-full items-center px-4">
          <h2 className="text-gray-500 font-[400] x-sm:text-[13px] "><span className='md:hidden'>{readingTime} mins read • </span>{viewDate}</h2>
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
