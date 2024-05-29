import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import React, { useState, useEffect } from "react";
import BlogSection from "../components/BlogSection/BlogSection";
import Articles from "../components/BlogSection/Articles";
import Blog from "../components/BlogSection/Blog";

const ViewBlog = () => {
  return (
    <>
      <Navbar />
      <Blog />
      <Footer />
    </>
  );
};

export default ViewBlog;
