import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Author from "./_Child/Author";
import company from "../../assets/images/company.png";
import { CiBookmark } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import noogler from "../../assets/images/noogler.png";

{
  /*  */
}

const BlogSection = () => {
  return (
    // <section className=" lg:mx-auto">
    //   <div className="flex flex-col place-items-center">
    //     <h1 className="text-black md:text-[40px] font-[500]" id="blog-section">Trending Stories</h1>
    //     <div className=" flex lg:flex-row flex-col items-center justify-center p-4 py-16 gap-16">
    //       <div className="lg:w-[40%] w-[75%] flex flex-col items-start rounded-md p-1 cursor-pointer hover:shadow-2xl hover:shadow-[#e3e3e3] hover:bg-[#f5f5f5] border border-[#f2f2f2] transition-all duration-300">
    //         <div className="items-center bg-cover h-[300px] overflow-hidden rounded-md" >
    //           <img src={noogler} alt="" />
    //         </div>
    //         <h2 className="text-black text-[30px] pt-2">
    //           Google STEP Internship
    //         </h2>
    //         <div className="px-2">
    //           <Author name="Kamakshi Dixit" company="Google" />
    //         </div>
    //         <p className="text-black">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
    //           eligendi culpa repudiandae hic eaque explicabo maxime, adipisci
    //           beatae, facilis eos aut eum veniam!...<Link to="/blog">read more</Link>
    //         </p>
    //         <div className="w-full flex justify-between">
    //           <p className="text-gray-500 pt-2">{`3 mins read • 21/12/2022`}</p>
    //           <div className="flex  gap-2">
    //             <a href="#">
    //               <CiHeart color="#888888" className="w-[20px] h-[30px]" />
    //             </a>
    //             <a href="#">
    //               <CiBookmark color="#888888" className="w-[20px] h-[30px]" />
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="lg:w-[40%] flex flex-col gap-4">
    //         <Scroll />
    //         <Scroll />
    //         <Scroll />
    //         <Scroll />
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <>
      <div className="p-5 w-full  flex flex-col items-center max-w-[1540px]">
        <h1 className="text-black pb-5 x-sm:text-[35px]">Trending Stories</h1>
        <div className="w-[70%] p-4 lg-xl:w-[100%]">
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
        <div className="w-[100%] flex justify-between pt-3 md:flex-col md:items-center md:gap-7">
          <img
            src={company}
            alt="company image"
            className="w-[400px] rounded-none"
          />
          <div className="w-[40%] flex flex-col items-start md:w-[58%] x-sm:w-[100%]">
            <h1 className="text-black text-[30px] md:text-[20px] md:g-black">
              Druva Interview Experience
            </h1>
            <Author name="Kamakshi Dixit" company="Google" />
            <p className="text-black text-[12px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              placeat molestiae libero nulla, optio eveniet nesciunt tempora
              similique excepturi veniam id adipisci mollitia ipsa voluptatum,
              minus architecto in alias asperiores.
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
