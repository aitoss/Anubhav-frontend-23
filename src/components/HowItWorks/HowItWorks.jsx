// HowItWorks.js
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Form from "../../assets/images/Form.png";
import Editor from "../../assets/images/Editor.png";
import Publish from "../../assets/images/Publish.png";

const Card = ({ title, description, imageURL }) => (
  <div className="group relative h-full w-full overflow-hidden rounded-2xl border shadow-md">
    <div className="z-10 h-full bg-[#fff9] p-3 backdrop-blur-[36px]">
      <div className="relative z-10 w-full overflow-hidden">
        <div className="absolute -bottom-[12px] left-0 z-20 h-[40px] w-[150%] bg-[#fcfcfc] blur-[8px]"></div>
        <img
          className="bottom-0 right-0 translate-y-[5%] scale-90 select-none rounded-xl border transition-all duration-300 group-hover:translate-y-[10%] md:scale-100"
          src={imageURL}
          alt={imageURL}
          draggable="false"
        />
      </div>
      <h3 className="z-50 mb-2 text-xl font-[500]">{title}</h3>
      <p className="z-50 text-[#5e5f6e]">{description}</p>
    </div>
    <div className="absolute right-1 top-16 -z-10 -rotate-[25deg]">
      <div className="h-4 w-[300px] bg-[#212121]"></div>
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
      Get Started with Our Platform
    </motion.h1>
  );
};
const HowItWorks = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 pb-32 pt-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center text-center">
        <h2 className="mb-2 text-sm font-[500] text-[#212121]">How It Works</h2>
        <h1 className="text-4xl font-bold">
          <AnimatedHeading />
        </h1>
        <p className="mb-8 w-[60%] text-[#5e5f6e] md:w-[90%]">
          Go{" "}
          <Link className="underline" to="/create">
            here
          </Link>
          &nbsp; and follow these simple steps to create and publish your blog
          posts with ease. Our platform is designed to make the writing and
          publishing process as smooth as possible.
        </p>
        <div className="grid h-full grid-cols-3 gap-4 md:grid-cols-2 x-sm:grid-cols-1">
          <Card
            title="Enter info about you"
            description="Enter basic information like your name, company name, offered position, and email address."
            imageURL={Form}
          />
          <Card
            title="Write Your Article"
            description="Use our intuitive editor to craft your blog post. Add headings, format text, and include images or links to make your content engaging and informative."
            imageURL={Editor}
          />
          <Card
            title="Publish and Share"
            description="Once you're satisfied with your post, hit the publish button to make it live. Share it with your audience via social media or email newsletters."
            imageURL={Publish}
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
