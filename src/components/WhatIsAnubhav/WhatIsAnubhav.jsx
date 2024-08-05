// WhatIsAnubhav.js
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SuccessStories from "../../assets/images/SuccessStories.png";
import Emoji from "../../assets/images/Emoji.png";
import Emoji1 from "../../assets/images/Emoji-1.png";
import Emoji2 from "../../assets/images/Emoji-2.png";

const Card = ({ title, description, imageURL }) => (
  <div className="relative w-full overflow-hidden rounded-2xl border shadow-md">
    <div className="z-10 flex w-full justify-between bg-[#fff9] p-0 backdrop-blur-[36px]">
      <div className="flex flex-col p-4">
        <h3 className="z-50 mb-2 text-xl font-[500]">{title}</h3>
        <p className="z-50 text-[#5e5f6e]">{description}</p>
      </div>
      <div className="relative z-10 overflow-hidden">
        <div className="absolute -left-[0px] z-20 h-[150%] w-[20px] bg-[#fcfcfc] blur-[8px]"></div>
        <Link to="/create" className="z-50">
          <img
            className="md:scale-80 sm:scale-60 bottom-0 right-0 h-32 w-[380px] scale-90 select-none rounded-xl border object-cover"
            src={imageURL}
            alt={title}
            draggable="false"
          />
        </Link>
      </div>
    </div>
    <div className="absolute right-1 top-16 -z-10 -rotate-[25deg]">
      <div className="h-4 w-[300px] bg-[#212121]"></div>
    </div>
  </div>
);

const Card2 = ({ title, description, imageURL }) => (
  <div className="relative mx-12 h-[450px] w-full overflow-hidden rounded-2xl border bg-white shadow-md">
    <div className="absolute left-1/2 top-[120%] z-0 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#212121]/5"></div>
    <div className="absolute left-1/2 top-[120%] z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#212121]/5"></div>
    <p className="absolute left-[5%] top-12 inline-flex -rotate-12 rounded-md border bg-[#f9f9f9] px-2 py-1">
      Fresh Stories
    </p>
    <p className="absolute right-12 top-12 inline-flex rotate-12 rounded-md border bg-[#f9f9f9] px-2 py-1">
      Latest Insights
    </p>
    <img
      className="absolute left-[30%] top-[20%] scale-[33%] select-none object-cover"
      src={Emoji}
      alt="Emoji"
      draggable="false"
    />
    <img
      className="absolute -bottom-8 left-[1%] scale-[33%] select-none object-cover"
      src={Emoji1}
      alt="Emoji 1"
      draggable="false"
    />
    <img
      className="absolute bottom-0 right-[4%] scale-[33%] select-none object-cover"
      src={Emoji2}
      alt="Emoji 2"
      draggable="false"
    />
    <div className="absolute bottom-[-2%] left-[20%] z-[100] inline-flex rotate-6 flex-col x-sm:bottom-[-5%] x-sm:left-[10%]">
      <div className="-mb-2 inline-flex cursor-pointer flex-col rounded-lg border border-[#d2d2d6] bg-[#f9f9f9] p-2 shadow-md backdrop-blur-[12px] transition-all duration-200 hover:z-[9999] hover:scale-105 hover:bg-[#fcfcfc]">
        <p className="text-[#212121]/60">5 mins read • 07-15-2024</p>
        <h3>How to Ace Your Next Interview</h3>
      </div>
      <div className="z-[9999] -mb-2 inline-flex cursor-pointer flex-col rounded-lg border border-[#d2d2d6] bg-[#f9f9f9] p-2 shadow-md backdrop-blur-[12px] transition-all duration-200 hover:scale-105 hover:bg-[#fcfcfc]">
        <p className="text-[#212121]/60">6 mins read • 07-10-2024</p>
        <h3>Networking Tips for Career Growth</h3>
      </div>
      <div className="z-[20] -mb-2 inline-flex cursor-pointer flex-col rounded-lg border border-[#d2d2d6] bg-[#f9f9f9] p-2 shadow-md backdrop-blur-[12px] transition-all duration-200 hover:z-[9999] hover:scale-105 hover:bg-[#fcfcfc]">
        <p className="text-[#212121]/60">4 mins read • 07-05-2024</p>
        <h3>Top 5 Internship Opportunities This Summer</h3>
      </div>
      <div className="z-[10] inline-flex cursor-pointer flex-col rounded-lg border border-[#d2d2d6] bg-[#f9f9f9] p-2 shadow-md backdrop-blur-[12px] transition-all duration-200 hover:z-[9999] hover:scale-105 hover:bg-[#fcfcfc]">
        <p className="text-[#212121]/60">5 mins read • 07-01-2024</p>
        <h3>Effective Resume Building Strategies</h3>
      </div>
    </div>
  </div>
);

const AnimatedHeading = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.h1
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.3 }}
      className="pb-10 text-[2.6rem] font-[500] text-[#212121] x-sm:text-4xl"
    >
      Discover Anubhav
    </motion.h1>
  );
};

const WhatIsAnubhav = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-[#f7f7f8] px-4 pb-32 pt-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center text-left">
        <div className="mx-auto flex w-full flex-row items-center justify-center gap-8 md:flex-col">
          <div className="flex w-full flex-col">
            <h2 className="mb-2 text-sm font-[500] text-[#212121]">
              What is Anubhav?
            </h2>
            <h1 className="text-4xl font-bold">
              <AnimatedHeading />
            </h1>
            <p className="mb-8 w-full text-[#5e5f6e] md:w-[90%]">
              Anubhav is a dedicated platform where AIT students can share and
              explore success stories related to placements and internships.
              It's a space where you can find real-life experiences and
              practical advice from your peers who have navigated their career
              paths with success.
              <br />
              <br />
              Whether you are looking for inspiration or practical tips to
              enhance your own career journey, Anubhav is here to guide you.{" "}
              <Link className="underline" to="/stories">
                Dive into Stories
              </Link>
              .
            </p>
            <div className="">
              <Card
                title="Share Your Journey"
                description="Contribute your own success story to inspire others and help build a community of successful AIT students."
                imageURL={SuccessStories}
              />
            </div>
          </div>
          <Card2 />
        </div>
      </div>
    </section>
  );
};

export default WhatIsAnubhav;
