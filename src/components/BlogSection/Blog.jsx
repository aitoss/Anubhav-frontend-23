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
import Giscus from '@giscus/react'; 
const Blog = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState([]);
  const [similarArticles, setSimilarArticles] = useState(null);
  const [timeStamp, setTimeStamp] = useState("");
  const [readingTime, setReadingTime] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchBlogData = async () => {
    try {
      const response = await axios.get(BACKEND_URL + "/blog/" + id);
      setBlogData(response.data);
      setTimeStamp(formatDate(response.data.createdAt));
      const article = response.data;
      setReadingTime(ReadTime(article.description));
      await fetchSimilarBlogs(
        article.title,
        article.articleTags.join(","),
        article.companyName,
        article._id
      );
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blog data:", error);
      setLoading(false);
    }
  };

  const fetchSimilarBlogs = async (
    title,
    articleTags,
    companyName,
    articleID
  ) => {
    try {
      const params = {
        q: title,
        company: companyName,
        tags: articleTags,
      };
      const response = await axios.get(BACKEND_URL + "/similarBlogs", {
        params: params,
      });
      const filteredData = response.data.filter(
        (item) => item._id !== articleID
      );
      setSimilarArticles(filteredData);
    } catch (error) {
      console.error("Error fetching similar blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogData();
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      {loading ? (
        <BlogLoading />
      ) : (
        <>
          {blogData.imageUrl !== "your_image_url_here" && (
            <div className="relative w-full h-[400px] lg:h-[500px] bg-black overflow-hidden">
              <img
                src={blogData?.imageUrl}
                className="absolute inset-0 w-full h-full object-cover"
                alt=""
              />
            </div>
          )}
          <div className="container mx-auto items-center bg-white p-5 lg:mx-auto lg:w-[65%] lg:p-6 lg:px-20">
            <br />
            <br />
            <br />
            <div className="data w- flex-col items-start justify-center space-y-2 md:mt-0 lg:justify-start lg:p-4">
              <div className="heading">
                <a className="text-4xl font-bold tracking-tighter text-[#212121] lg:text-5xl x-sm:text-3xl">
                  {blogData?.title}
                </a>
              </div>
              <Author
                person={{
                  name: blogData?.author?.name,
                  company: blogData?.companyName,
                }}
              />
              <Tags data={blogData?.articleTags} />
              <MinuteReadLikes
                id={id}
                readingTime={readingTime}
                timeStamp={timeStamp}
              />
              <div className="lorem-container flex flex-col items-center justify-center py-3 text-black">
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
            <h1 className="font-medium lg:text-4xl text-4xl items-center justify-center text-center lg:text-left lg:ml-10 text-slate-900 ">
          Comments
        </h1>
            <Giscus
              repo="aitoss/Anubhav-frontend-23"
              repoId="R_kgDOKijwFQ"
              category="General"
              categoryId="DIC_kwDOKijwFc4CeLfX"
              mapping="pathname"
              term="Welcome to @giscus/react component!"
              reactionsEnabled="1"
              emitMetadata="0"
              inputPosition="top"
              theme="light"
              lang="en"
            />

            {similarArticles && similarArticles.length > 0 && (
              <>
                <Articles similarArticles={similarArticles} />
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Blog;
