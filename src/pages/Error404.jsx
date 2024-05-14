import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import error from "../assets/error.svg";
import Logo from "../components/Loader/DummyLoader";

export default function Error404() {
  return (
    <>
      <Navbar />
      {/* <div className="h-16 w-screen md:h-12 pt-12"></div> */}
      <section className="w-[100%] h-[90vh] mx-auto flex flex-col justify-center place-items-center md:justify-center ">
        <div className="flex flex-col justify-center place-items-center gap-2 md:bottom-20">
          <motion.div
            initial={{ opacity: 0, translateY: 60 }}
            animate={{ opacity: 1, translateY: 50 }}
            exit={{ opacity: 0, translateY: 100 }}
            transition={{ duration: 0.15, delay: 0.02 }}
          >
            <h1 className="text-[#212121] md:text-[44px] x-sm:text-[36px]">Page not found</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: 60 }}
            animate={{ opacity: 1, translateY: 50 }}
            exit={{ opacity: 0, translateY: 100 }}
            transition={{ duration: 0.15, delay: 0.04 }}
          >
            <img className="w-[500px] md:w-[400px]" draggable="false" src={error} alt="" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: 60 }}
            animate={{ opacity: 1, translateY: 50 }}
            exit={{ opacity: 0, translateY: 100 }}
            transition={{ duration: 0.15, delay: 0.06 }}
          >
            <p className="text-[#212121] text-center md:text-[15px]">Oops! Looks like you followed a bad link. If you think is a problem with us, please tell us</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: 60 }}
            animate={{ opacity: 1, translateY: 50 }}
            exit={{ opacity: 0, translateY: 100 }}
            transition={{ duration: 0.15, delay: 0.08 }}
          >
            <Link to="/" className="text-[20px] text-[#212121] font-[400]   p-1 cursor-pointer hover:text-[#313131] ">
              <div className="flex gap-2 py-1 px-2 justify-center items-center text-[20px] bg-[#212121] rounded-lg text-[#fff] font-[400]   p-2 cursor-pointer hover:bg-[#313131] hover:focus:outline:none hover:focus:border:none">
                Go to Home
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 10 19" fill="none">
                  <path d="M1.91003 17.171L8.43003 10.651C9.20003 9.88103 9.20003 8.62103 8.43003 7.85103L1.91003 1.33103" stroke="#fff" strokeWidth="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>
      {/* <div className="w-full flex justify-center h-screen items-center"><Logo /></div> */}
    </>
  )
}