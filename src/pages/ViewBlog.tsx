import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import BlogSection from "../components/BlogSection/BlogSection";
import Articles from "../components/BlogSection/Articles";
import Blogs from "../components/BlogSection/Blogs";

const ViewBlog = () => {
    const { id } = useParams();
    return(
        <>
            <h3 className="text-[#212121] flex justify-center">{id}</h3>
        <Navbar />
        <Blogs/>
        <div className="lg:w-[70%] mx-auto">
        <Articles/>
        </div>
        <Footer />
       
        </>
    );
}

export default ViewBlog;