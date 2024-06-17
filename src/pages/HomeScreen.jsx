"use client";
import React, { useState, useEffect } from "react";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useRef } from "react";
import { motion } from "framer-motion";
import SearchModal from "../components/Search/SearchModal";
import Search from "../components/Search/Search";
import logo1 from "../assets/images/user1.png";
import logo2 from "../assets/images/user2.png";
import logo3 from "../assets/images/user3.png";
import background2 from "../assets/bg.png";
// import background2 from '../assets/dots-pattern.svg';
import Slider from "../components/Slider/Slider";
import Video from "../pages/Videos";
import BackgroundDots from "../assets/Background";

export default function HomeScreen() {
  const [OpenSearchModal, setOpenSearchModal] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const emailInputRef = useRef < HTMLInputElement > null;
  const inputRef = useRef(null);

  const handleClick = () => {
    setOpenSearchModal(true);
  };

  useEffect(() => {
    if (OpenSearchModal) {
    }
  }, [OpenSearchModal]);

  const closeSearchModal = () => {
    setOpenSearchModal(false);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check if Cmd key is pressed on Mac or Ctrl key on other platforms
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        // Focus on the input field when the shortcut is activated
        // inputRef.current.focus();
        setOpenSearchModal(true);
      }
    };

    // const handleClickOutside = (event) => {
    //   if (
    //     inputRef.current &&
    //     !inputRef.current.contains(event.target) &&
    //     !event.target.closest('.recent-searches')
    //   ) {
    //     setIsExpanded(false);
    //   }
    // };

    document.addEventListener("keydown", handleKeyDown);
    // document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      // document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const DummySearch = () => {
    return (
      <>
        <div className="search flex px-[4px] py-[1px] border-[1.5px] bg-[rgb(33,33,33)] border-[#414141] justify-center items-center gap-1 rounded-lg shadow-md shadow-[rgba(48,50,51,0.3)]">
          <div className=" h-[32px] w-[32px] border-[1.5px] bg-[#313131] border-[#414141] rounded-lg p-1 cursor-pointer  flex justify-center items-center ">
            <svg
              width="24"
              height="24"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8333 28.6509C22.8289 28.6509 28.5 22.9798 28.5 15.9842C28.5 8.9886 22.8289 3.31754 15.8333 3.31754C8.83769 3.31754 3.16663 8.9886 3.16663 15.9842C3.16663 22.9798 8.83769 28.6509 15.8333 28.6509Z"
                stroke="#b9b9b9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M29.8333 29.9842L27.1666 27.3175"
                stroke="#b9b9b9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <input
            ref={inputRef}
            onClick={handleClick}
            className="bg-[#212121] px-3 h-[2.5rem] text-[#ffffffcc]  w-[350px] md:w-[280px] lg:w-[400px] border-none outline-none focus:outline-none placeholder:text-[rgba(255,255,255,0.6)] placeholder:font-[300] font-[300] placeholder:focus:outline-none placeholder:focus:border-none placeholder:focus:text-[rgba(255,255,255,0.8)]"
            type=""
            placeholder="Search for your Dreams.."
          />
          <div className="border-[1.5px] border-[#414141] bg-[#313131] text-[#b9b9b9] p-1 h-[32px] w-[32px] flex justify-center items-center rounded-md font-[400] ">
            ⌘K
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {OpenSearchModal && (
        <SearchModal closeSearchModal={closeSearchModal} focus={1} full={1} />
      )}
      {/* <div className="h-16 w-screen md:h-8 pt-20"></div> */}
      <div
        className="relative flex flex-col w-full pt-20 lg:pb-20 justify-center items-center"
        style={{
          // backgroundImage: `url(${background2})`,
          // backgroundPosition: "center",
          // backgroundRepeat: "no-repeat",
        }}
      >
        <BackgroundDots
          dotSize={1.8}
          dotColor="#c9c9c9"
          backgroundColor=""
          gap={20}
          className="custom-class"
          fade={true}
        />
        <div className="flex  flex-col gap-7 justify-center items-center p-7">
          <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 100 }}
            transition={{ duration: 0.15 }}
          >
            <h1 className="  text-8xl sm:text-7xl  lg:text-8xl  text-[#212121] tracking-wider flex justify-center font-[600]">
              Anubhav
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 100 }}
            transition={{ duration: 0.15, delay: 0.05 }}
          >
            <p className="text-3xl lg:text-4xl text-[#414141]  flex justify-center">
              Stories of Success
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 100 }}
            transition={{ duration: 0.15, delay: 0.1 }}
          >
            <div className="flex items-center gap-4">
              <div className="flex">
                <img
                  src={logo2}
                  alt="random"
                  className="w-12 mr-[-16px] rounded-full border-[3px] border-white"
                />
                <img
                  src={logo1}
                  alt="random"
                  className="w-12 mr-[-16px] rounded-full border-[3px] border-white"
                />
                <img
                  src={logo3}
                  alt="random"
                  className="w-12 mr-[-16px] rounded-full border-[3px] border-white"
                />
                <div className="w-12 h-12 flex justify-center  items-center font-[500] bg-white text-[#414141]  rounded-full border-4 border-white shadow-lg shadow-[#0000001d] p-4">
                  3k+
                </div>
              </div>
              <p className="text-xl text-[#414141] font-[500] ">
                Articles written
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 100 }}
            transition={{ duration: 0.15, delay: 0.15 }}
          >
            <DummySearch />
          </motion.div>
        </div>
        <div className="w-full pt-24 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, translateY: 0 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 100 }}
            transition={{ duration: 0.15, delay: 0.2 }}
          >
            <h1 className="text-black text-[30px] x-sm:text-[20px] pb-3">
              Exploring <span className="font-[500]">The Interview Safari</span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: 0 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 100 }}
            transition={{ duration: 0.15, delay: 0.25 }}
          >
            <Slider />
          </motion.div>
        </div>
      </div>
    </>
  );
}

