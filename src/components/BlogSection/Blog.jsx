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
      {loading == true ? (
        <BlogLoading />
      ) : (
        <div className="container mx-auto items-center bg-white p-5 lg:mx-auto lg:w-[65%] lg:p-6 lg:px-20">
          <br />
          <br />
          <br />
          <div className="data w- flex-col items-start justify-center space-y-2 md:mt-0 lg:justify-start lg:p-4">
            <div className="heading">
              <a
                className="text-4xl font-bold tracking-tighter text-[#212121] lg:text-5xl x-sm:text-3xl"
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
            <div className="lorem-container flex flex-col items-center justify-center py-3 text-black">
              {blogData.imageUrl !== "your_image_url_here" && (
                <div className="flex w-full flex-col items-center justify-center lg:pb-10">
                  <img
                    src={blogData?.imageUrl}
                    className="h-[400px] w-full rounded-lg bg-black object-cover md:h-[300px] lg:h-[300px] lg:w-[750px] x-sm:h-[200px]"
                    alt=""
                  />
                </div>
              )}
              <div className="w-full rounded-lg bg-white text-[18px] shadow-none">
                <ReactQuill
                  value={blogData?.description}
                  theme="bubble"
                  readOnly
                  className="h-full w-full"
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
      )}
    </>
  );
};

export default Blog;
