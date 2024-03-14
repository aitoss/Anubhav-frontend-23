import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Author from "./_Child/Author";
import company from "../../assets/images/company.png";
import { CiBookmark } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";


const BlogSection = () => {
  return (
    <>
      <div className="p-0 w-full  flex flex-col items-center max-w-[1540px]">
        <h1 className="text-black pb-5 x-sm:text-[35px]">Trending Stories</h1>
        <div className="w-[70%] p-4 lg-xl:w-[100%] flex flex-col gap-4">
          <Scroll />
          <Scroll />
          <Scroll />
        </div>
      </div>
    </>
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
        <div className="w-[100%] flex justify-between items-center pt-0 md:flex-col md:items-center md:gap-7">
          <img
            src={company}
            alt="company image"
            className="w-[25rem] rounded-none"
          />
          <div className="w-[40%] flex flex-col items-start md:w-[54%] x-sm:w-[100%]">
            <h1 className="text-black text-[30px] md:text-[20px] md:g-black">
              Druva Interview Experience
            </h1>
            <Author name="Kamakshi Dixit" company="Google" />
            <p className="text-black text-[14px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              placeat molestiae libero nulla, optio eveniet nesciunt tempora
              similique excepturi veniam.
              <a href="/link" className="text-gray-400 hover:text-gray-500">
                ..Read More
              </a>
            </p>
            <div className="w-full flex justify-between pt-3">
              <p className="text-gray-500 pt-2">{`${readingTime} mins read`}</p>
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
        </div>
      </Link>
    </>
  );
}
export default BlogSection;
