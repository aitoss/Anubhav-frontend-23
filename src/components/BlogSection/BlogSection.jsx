import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Author from "./_Child/Author";
import company from "../../assets/images/company.png";
import { CiBookmark } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import noogler from "../../assets/images/noogler.png";

{/*  */}

const BlogSection = () => {
  return (
    <section className=" lg:mx-auto">
      <div className="w-[100%] flex flex-col place-items-center">
        <h1 className="text-black md:text-[40px]" id="blog-section">Trending Stories</h1>
        <div className="w-full flex lg:flex-row flex-col justify-center p-2 py-16 gap-16">
          <div className="lg:w-[35%] flex flex-col place-items-start rounded-md p-1 cursor-pointer hover:shadow-lg">
            <img src={noogler} alt="" className="w-full h-[300px] rounded-md" />
            <h2 className="text-black text-[30px] pt-2">
              Google STEP Internship
            </h2>
            <div className="px-2">
              <Author />
            </div>
            <p className="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              eligendi culpa repudiandae hic eaque explicabo maxime, adipisci
              beatae, facilis eos aut eum veniam!...<Link to="/blog">read more</Link>
            </p>
            <div className="w-full flex justify-between">
              <p className="text-gray-500 pt-2">{`3 mins read • 21/12/2022`}</p>
              <div className="flex  gap-2">
                <a href="#">
                  <CiHeart color="#888888" className="w-[20px] h-[30px]" />
                </a>
                <a href="#">
                  <CiBookmark color="#888888" className="w-[20px] h-[30px]" />
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-[40%] flex flex-col gap-4">
            <Scroll />
            <Scroll />
            <Scroll />
            <Scroll />
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
      "Lorem ipsum dolor sit ametr adipisicing elit. Nobis, accusamus amet beatae atque dolorem dolorum saepe!";
    Content(example);
  }, []);
  useEffect(() => {
    const TotalReadTime = ReadTime(article);
    Time(TotalReadTime);
  }, [article]);
  return (
    <>
      <Link to="/blog">
      <div className="w-full lg:flex-row p-4 flex-col flex gap-4 rounded-md hover:shadow-lg">
          <img src={company} alt="" className="lg:w-[220px] rounded-md"/>
          <div>
            <h2 className="text-black text-[20px]">Druva Interview Experience</h2>
            <Author />
            <p className="text-black hidden">
                {restrict(article, window.innerWidth <= 640 ? 20 : 35)}
                <span>
                  <a href="/link" className="text-gray-400 hover:text-gray-500">
                    ..Read More
                  </a>
                </span>
            </p>
            <p className="text-gray-500 pt-2">{`{readingTime} mins read • 21/12/2022`}</p>
          </div>
      </div>
      </Link>
    </>
  );
}
export default BlogSection;
