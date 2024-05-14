import { useState, useEffect } from "react";
import company from "../../assets/images/company.png";
import axios from "axios";
import { htmlToText } from 'html-to-text';
import { BACKEND_URL } from "../../constants";
import BlogCard from "./BlogCard";
import BlogCardLoading from "./BlogCardLoading";

const BlogSection = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status

  const fetchBlogData = async () => {
    try {
      const response = await axios.get(BACKEND_URL + '/blogs?useLatest=true');
      setBlogData(response.data);
      setLoading(false); // Set loading to false when data is fetched
    } catch (error) {
      console.error('Error fetching blog data:', error);
      setLoading(false); // Set loading to false on error
    }
  };

  useEffect(() => {
    fetchBlogData()
  }, []);

  return (
    <>
      <div className="p-0 w-full  flex flex-col items-center max-w-[1540px]">
        <h1 className="text-black pb-20 x-sm:text-[35px]">Trending Stories</h1>
        <div className="w-[70%] p-4 lg-xl:w-[100%] flex flex-col gap-10">
          {loading ? ( // Show shimmer/loading screen while data is being fetched
            <>
              <BlogCardLoading />
              <BlogCardLoading />
              <BlogCardLoading />
              <BlogCardLoading />
              <BlogCardLoading />
            </>
          ) : (
            // Render blog cards once data is loaded
            blogData.map((item) => (
              <BlogCard
                link={`/blog/${item._id}`}
                Title={item.title}
                imagesrc={company}
                author={item.author.name}
                company={item.companyName}
                readingTime={20}
                date="21/12/2022"
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default BlogSection;



