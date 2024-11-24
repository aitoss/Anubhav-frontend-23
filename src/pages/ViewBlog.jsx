import BlogCard from "../components/BlogSection/BlogCard";
import Footer from "../components/Landing/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const ViewBlog = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <BlogCard />
      <Footer />
    </div>
  );
};

export default ViewBlog;
