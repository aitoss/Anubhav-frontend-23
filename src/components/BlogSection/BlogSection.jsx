import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Author from "./_Child/Author";
import company from "../../assets/images/company.png";
import { CiBookmark } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import axios from "axios";
import { htmlToText } from 'html-to-text';

const BlogSection = () => {
  const [blogData, setBlogData] = useState([]);
  const [blogContent, setBlogContent] = useState('');

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/anubhav/blogs?useLatest=true');
        setBlogData(response.data);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };
    fetchBlogData();
  }, []);


  return (
    <>
      <div className="p-0 w-full  flex flex-col items-center max-w-[1540px]">
        <h1 className="text-black pb-5 x-sm:text-[35px]">Trending Stories</h1>
        <div className="w-[70%] p-4 lg-xl:w-[100%] flex flex-col gap-4">
          {blogData.map((item) => {
            return (
              <div className="w-[100%] flex justify-between items-center pt-0 md:flex-col md:items-center md:gap-3">
                <img
                  src={company}
                  alt="company image"
                  className="w-[25rem] rounded-none"
                />
                <div className="w-[40%] flex flex-col items-start md:w-[54%] x-sm:w-[100%]">
                  <h1 className="text-black text-[30px] md:text-[20px] md:g-black">
                    {item.companyName}
                  </h1>
                  <Author name={item.author.name} company={item.articleTags} />
                  <p className="text-black text-[14px]">
                    {htmlToText(item.description).slice(0, 100)}
                    <Link to={`/blog/${item.id}`} className="text-gray-500">...Read more</Link>
                  </p>
                  <div className="w-full flex justify-between pt-3">
                    <p className="text-gray-500 pt-2"> mins read</p>
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
            )
          })}
        </div>
      </div>
    </>
  );
};

export default BlogSection;



