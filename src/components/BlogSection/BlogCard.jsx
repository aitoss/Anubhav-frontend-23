import React from 'react'
import { Link } from 'react-router-dom'
import companyImage from '../../assets/images/company.png'
import Author from './_Child/Author';
import { CiBookmark } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import user3 from '../../assets/images/user3.png'


const BlogCard = ({ Title, author, company, readingTime, date }) => {
    return (
        <>
            <div className="flex w-full h-full justify-center items-center border-b p-1 pb-4">
                <Link to="/" >
                    <div className="w-62 sm:w-12 md:w-48 lg:w-80 rounded-lg overflow-hidden">
                        <img src={companyImage} alt="Amazon" />
                    </div>
                </Link>

                <div className="data items-start lg:justify-start justify-between h-full flex-col p-4 md:mt-0 w-full  ">
                    <div className="heading">
                        <a className="text-xl lg:text-3xl font-[500] text-gray-700 hover:text-gray-800 truncate">
                            {Title}
                        </a>
                    </div>

                    <div className="lg:text-base text-[14px] ">
                        <div className="author flex items-center py-2">
                            <img src={user3} className="rounded-full w-8 h-8 mr-2" alt="User Avatar" />
                            <div className="flex items-center gap-2">
                                <a href="#" className="font-[400] hover:text-gray-600 text-gray-700">
                                    {author}
                                </a>
                                <span className="text-[#a0a0a0] font-[400]">|</span>
                                <a href="#" className="font-[400] text-gray-500">
                                    {company}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="lorem-container text-black lg:py-3 justify-center">
                    </div>
                    <div className="flex justify-between w-full items-center">
                        <p className="text-gray-500 "><span className='md:hidden'>{readingTime} mins read • </span>{date}</p>
                        <div className="flex gap-3 ml-auto">
                            <a href="#">
                                <CiHeart color="#888888" />
                            </a>
                            <a href="#">
                                <CiBookmark color="#888888" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default BlogCard