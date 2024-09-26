"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SearchModal from "../components/Search/SearchModal";
import Slider from "../components/Slider/Slider";
import BackgroundDots from "../assets/Background";
import { AnimatedTooltip } from "../components/Tooltip/tooltip";
import MaskWrapper from "../components/ui/maskWrapper";
import FadeWrapper from "../components/ui/fadeWrapper";

export default function HomeScreen() {
  const [openSearchModal, setOpenSearchModal] = useState(false);
  const people = [
    {
      id: 1,
      name: "Google",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    },
    {
      id: 2,
      name: "Microsoft",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
      id: 3,
      name: "Amazon",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
  ];

  const handleKeyDown = useCallback((event) => {
    if ((event.metaKey || event.ctrlKey) && event.key === "k") {
      event.preventDefault();
      setOpenSearchModal(true);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const DummySearch = React.memo(() => {
    return (
      <div className="search flex px-1 py-1 border bg-[rgb(33,33,33)] border-[#414141] justify-center items-center gap-1 rounded-lg shadow-md">
        <div className="h-8 w-8 border bg-[#313131] border-[#414141] rounded-lg p-1 cursor-pointer flex justify-center items-center">
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
          onClick={() => setOpenSearchModal(true)}
          className="bg-[#212121] px-3 h-10 text-[#ffffffcc] w-[350px] md:w-[280px] lg:w-[400px] border-none outline-none placeholder:text-[rgba(255,255,255,0.6)]"
          placeholder="Search for your Dreams.."
        />
        <div className="border bg-[#313131] text-[#b9b9b9] p-1 h-8 w-8 flex justify-center items-center rounded-md">
          ⌘K
        </div>
      </div>
    );
  });

  return (
    <>
      {openSearchModal && <SearchModal closeSearchModal={() => setOpenSearchModal(false)} focus={1} full={1} />}
      <div className="relative flex flex-col w-full pt-20 lg:pb-20 justify-center items-center">
        <BackgroundDots
          dotSize={1.8}
          dotColor="#c9c9c9"
          className="custom-class"
          fade={true}
        />
        <div className="flex flex-col gap-4 justify-center items-center p-7">
          <h1 className="text-7xl lg:text-8xl text-[#212121] font-[600]">
            <FadeWrapper>Anubhav</FadeWrapper>
          </h1>
          <p className="text-3xl lg:text-4xl text-[#414141]">
            <FadeWrapper delay={0.05}>Stories of Success</FadeWrapper>
          </p>
          <FadeWrapper delay={0.1}>
            <div className="flex items-center gap-4">
              <AnimatedTooltip items={people} />
              <div className="w-12 h-12 z-10 flex justify-center items-center font-[500] bg-white text-[#414141] rounded-full border-4 border-white shadow-lg">
                3k+
              </div>
              <p className="text-xl text-[#414141] font-[500]">Articles written</p>
            </div>
          </FadeWrapper>
          <FadeWrapper delay={0.15}>
            <DummySearch />
          </FadeWrapper>
          <FadeWrapper delay={0.2}>
            <Link to="/search">
              <h3 className="hover:border-[#777] leading-3 pt-4 flex items-center justify-center group border-b border-[#f7f7f8]">
                Read articles
                <div className="relative w-4 h-4 flex items-center">
                  <svg className="h-4 w-4 absolute transition-all group-hover:translate-x-1 group-hover:opacity-0" xmlns="http://www.w3.org/2000/svg" fill="#212121" viewBox="0 0 16 16">
                    <path d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"></path>
                  </svg>
                  <svg className="h-4 w-4 absolute opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" xmlns="http://www.w3.org/2000/svg" fill="#212121" viewBox="0 0 16 16">
                    <path d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z"></path>
                  </svg>
                </div>
              </h3>
            </Link>
          </FadeWrapper>
        </div>
        <div className="w-full pt-24 flex flex-col items-center">
          <MaskWrapper>
            <h1 className="text-black text-[30px] x-sm:text-[20px]">
              Exploring <span className="font-[500]">The Interview Safari</span>
            </h1>
          </MaskWrapper>
          <MaskWrapper>
            <Slider />
          </MaskWrapper>
        </div>
      </div>
    </>
  );
}
