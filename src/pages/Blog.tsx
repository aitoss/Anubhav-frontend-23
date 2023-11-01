import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogSection from "../components/BlogSection/BlogSection";
import Articles from "../components/BlogSection/Articles";
const Create = () => {
    return(
        <>
        <Navbar />
        <Articles/>

        <Footer />
        </>
    );
}

export default Create;