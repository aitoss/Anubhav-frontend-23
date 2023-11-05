import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogSection from "../components/BlogSection/BlogSection";
import Articles from "../components/BlogSection/Articles";
import Blogs from "../components/BlogSection/Blogs";
const Create = () => {
    return(
        <>

        <Navbar />
        <div className="">
        <Blogs/>
        <Articles/>
        <Footer />
        </div>
        </>
    );
}

export default Create;