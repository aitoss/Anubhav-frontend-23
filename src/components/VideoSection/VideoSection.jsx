import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
// import VideoThumbnail from "../../assets/images/VideoThumbnail.png"; // Replace with your video thumbnail
// import PlayIcon from "../../assets/images/PlayIcon.png"; // Replace with your play button icon

const VideoCard = ({ title, description, videoURL }) => (
  <div className="relative h-full w-full overflow-hidden rounded-2xl border bg-white shadow-md">
    <div className="relative h-[240px] overflow-hidden">
      <img
        className="h-full w-full rounded-t-2xl object-cover"
        // src={VideoThumbnail}
        alt={title}
      />
      <a
        href={videoURL}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 flex items-center justify-center"
      >
        <img
          className="h-16 w-16 cursor-pointer"
          // src={PlayIcon}
          alt="Play"
        />
      </a>
    </div>
    <div className="p-4">
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
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
      Prefer Videos Over Blogs?
    </motion.h1>
  );
};

const VideoSection = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-[#f7f7f8] px-4 pb-32 pt-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center text-left">
        <div className="mx-auto flex w-full flex-row items-center justify-center gap-8 md:flex-col-reverse">
          <div className="h-[400px] w-full rounded-xl border bg-[#5e5f6e]"></div>
          <div className="flex w-full flex-col">
            <h2 className="mb-2 text-sm font-[500] text-[#212121]">
              Video Collection
            </h2>
            <h1 className="text-4xl font-bold">
              <AnimatedHeading />
            </h1>
            <p className="mb-8 w-full text-[#5e5f6e] md:w-[90%]">
              Do you find reading blogs a bit boring? No worries! We’ve got an
              exciting collection of videos that bring the same inspiring
              stories and useful insights right to your screen.
            </p>
            <div className="">
              <div className="h-[200px] w-full rounded-xl border bg-[#5e5f6e]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
