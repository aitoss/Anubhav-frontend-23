import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Author from "./_Child/Author";
import company from "../../assets/images/company.png";
import { CiBookmark } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import noogler from "../../assets/images/noogler.png"
const BlogSection = () => {
  return (
    <section className="lg:py-4 lg:mx-auto lg:-mt-24">
      <div className="container lg:mx-auto md:px-20">
        <h1
          className="font-semibold text-5xl lg:mt-16 font-sans p-5 text-slate-900 text-center"
          id="blog-section"
        >
          Trending Stories
        </h1>
        <div className="w-screen flex gap-12 flex-col lg:flex-row justify-between">
        <Link
        to="/blog"
        className=""
      >
          <div className="h-full lg:pt-32 lg:pr-32 mx-auto"> 
          <div className="text-4xl pb-16 font-bold text-gray-700 hover:text-gray-800">Popular Stories</div>
          <div class="lg:h-[350px] h-[200px] hidden lg:block mx-auto  w-full pb-4 flex flex-col items-center justify-center">
            <img src={noogler} className=" h-full" alt="" />
          </div>
          <Author/>
          <div  className="text-xl lg:text-4xl font-bold text-gray-700 hover:text-gray-800">Google STEP Internship Decoded</div>
          <div className="flex lg:gap-10 py-2 items-center">
              <p className="text-gray-500">{`3 mins read • 21/12/2022`}</p>
              <div className="flex gap-3 ml-auto">
                <a href="#">
                  <CiHeart color="#888888" />
                </a>
                <a href="#">
                  <CiBookmark color="#888888" />
                </a>
              </div>
              
            </div>
            <p class="mb-4 lg:block hidden text-black">STEP is a Google <strong class="text-blue-600">Software Student Training in Engineering Program</strong>,<br/>
             which is open to all students studying in their second year and enrolled in a Bachelor’s Program.<br/></p>         
          </div>
      </Link>
          <div className="left-0 mr-24 w-screen lg:w-[70%]">
            {Scroll()}
            {Scroll()}
            {Scroll()}
          </div>
        </div>
      </div>
    </section>
  );
};
function ReadTime(content) {
  const wpm = 180;
  const words = content.split(" ").length;
  const minutes = Math.ceil(words / wpm);
  return minutes;
}
function restrict(content, wordLimit) {
  const words = content.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return content;
}
function Scroll() {
  const [article, Content] = useState("");
  const [readingTime, Time] = useState(0);
  useEffect(() => {
    const example =
      "Lorem ipsum dolor sit ametr adipisicing elit. Nobis, accusamus amet fugiat nulla voluptate quia natus possimus minima in sapiente vero, sunt hic, consequuntur aliquid beatae atque dolorem dolorum saepe!";
    Content(example);
  }, []);
  useEffect(() => {
    const TotalReadTime = ReadTime(article);
    Time(TotalReadTime);
  }, [article]);
  return (
    <div className="lg:p-6 p-1 lg:flex lg:flex-row w-[70%]  shrink">
      <div className="bg-gray-300 lg:hidden h-px  mt-6 mb-6"></div>

      <Link
        to="/blog"
        className="p-3 lg:border-b-2 lg:border-gray-400 lg:hover:shadow-xl"
      >
        <div className="flex lg:flex-row-reverse flex-col space-x-8 ">
          <div className="image sm:p-5 sm:content-start flex-auto sm:justify-center lg:justify-start justify-center flex items-center">
            <img src={company} alt="User 1" className=" rounded-md" />
          </div>

          <div className="data items-start lg:justify-start justify-center flex-row p-4 md:mt-0">
            <div className="heading">
              <a
                className="text-2xl md:text-3xl font-bold text-gray-700 hover:text-gray-800"
                href="/link"
              >
                Druva Interview Experience
              </a>
            </div>
            <Author />
            <div className="lorem-container text-black py-3 justify-center">
              <p>
                {restrict(article, window.innerWidth <= 640 ? 20 : 35)}
                <span>
                  <a href="/link" className="text-gray-400 hover:text-gray-500">
                    ..Read More
                  </a>
                </span>
              </p>
            </div>
            <div className="flex lg:gap-10 items-center">
              <p className="text-gray-500">{`${readingTime} mins read • 21/12/2022`}</p>
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
      </Link>
    </div>
  );
}
export default BlogSection;
