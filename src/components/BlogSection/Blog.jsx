import { CiBookmark, CiHeart } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactQuill from "react-quill";

import Author from "./_Child/Author";
import Tags from "./_Child/Tags";
import Articles from "./Articles";
import BlogCardLoading from "./BlogCardLoading";

import { BACKEND_URL } from "../../constants";
import { formatDate, ReadTime } from "../../services/date";
import BlogLoading from "./BlogLoading";
import MinuteReadLikes from "../MinuteReadLikes/MinuteReadLikes";
const Blog = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState([]);
  const [similarArticles, setSimilarArticles] = useState(null);
  const [timeStamp, setTimeStamp] = useState("");
  const [readingTime, setReadingTime] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchBlogData = async () => {
    const response = await axios.get(BACKEND_URL + "/blog/" + id);
    setBlogData(response.data);
    setLoading(false);
    setTimeStamp(formatDate(response.data.createdAt));
    const article = response.data;
    setReadingTime(ReadTime(article.description));
    await fetchSimilarBlogs(
      article.title,
      article.articleTags.join(","),
      article.companyName,
      article._id,
    );
  };

  const fetchSimilarBlogs = async (
    title,
    articleTags,
    companyName,
    articleID,
  ) => {
    const params = {
      q: title,
      company: companyName,
      tags: articleTags,
    };
    const response = await axios.get(BACKEND_URL + "/similarBlogs", {
      params: params,
    });
    const filteredData = response.data.filter((item) => item._id != articleID);
    setSimilarArticles(filteredData);
  };

  useEffect(() => {
    fetchBlogData();
    window.scrollTo(0, 0);
  }, [id]);



  return (
    <>
      {loading == true ? <BlogLoading /> :

        <div className="container items-center lg:p-6 mx-auto lg:mx-auto lg:w-[65%] lg:px-20 p-5">
          <br />
          <br />
          <br />
          <div className="data w- items-start lg:justify-start justify-center flex-col lg:p-4 space-y-2 md:mt-0  ">
            <div className="heading">
              <a
                className="x-sm:text-3xl text-4xl lg:text-5xl tracking-tighter font-bold text-[#212121]"
              // href="/link"
              >
                {blogData?.title}
              </a>
            </div>
            <Author
              person={{
                name: blogData?.author?.name,
                company: blogData?.companyName,
              }}
            />
            <Tags data={blogData?.articleTags}></Tags>
            <MinuteReadLikes
              id={id} // Pass the blog id to MinuteReadLikes
              readingTime={readingTime}
              timeStamp={timeStamp}
            />
            <div className="lorem-container text-black py-3 flex flex-col items-center justify-center">
              {blogData.imageUrl !== "your_image_url_here" && (
                <div className=" lg:pb-10 w-full flex flex-col items-center justify-center">
                  <img
                    src={blogData?.imageUrl}
                    className="lg:h-[300px] lg:w-[750px] h-[400px] x-sm:h-[200px] md:h-[300px] w-full object-cover rounded-lg"
                    alt=""
                  />
                </div>
              )}
              <div className="w-full text-[18px] bg-white shadow-none rounded-lg">
              <ReactQuill
              value={blogData?.description}
              theme="bubble"
              readOnly
              className="w-full h-full"
            />
              </div>
            </div>


          </div>

          {similarArticles ? (
            <Articles similarArticles={similarArticles} /> // Render Articles component when similarArticles is not null
          ) : (
            <>
              <BlogCardLoading />
              <BlogCardLoading />
              <BlogCardLoading />
              <BlogCardLoading />
              <BlogCardLoading />
            </>
          )}
        </div>
      }
    </>
  );
};

export default Blog;