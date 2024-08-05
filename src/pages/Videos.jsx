import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Tag from "../components/InputTag/Tag";
import YoutubeCard from "../components/Video/YoutubeCard";
import { useInView } from "react-intersection-observer";

const Videos = () => {
  const [youtubeData, setYoutubeData] = useState([]);

  useEffect(() => {
    fetch("/VideoData.json")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setYoutubeData(data))
      .catch(error => console.error('Error loading video data:', error));
  }, []);
  
  return (
    <>
      <div className="flex flex-col items-center gap-10 overflow-hidden p-5 x-sm:gap-3 mt-20 mb-20">
        <AnimatedHeading />
        <div className="w-screen flex flex-wrap gap-4 justify-center align-bottom x-sm:px-6">
          <AnimatedTags name="CP" />
          <AnimatedTags name="Codeforces" />
          <AnimatedTags name="Dev" />
          <AnimatedTags name="Hackthon" />
          <AnimatedTags name="Deutsche-Bank" />
          <AnimatedTags name="Google" />
        </div>
        <div className="w-screen flex justify-center p-4 ">
          <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-6">
            {youtubeData.map((data, index) => (
              <AnimatedYoutubeCard
                key={index}
                title={data.title}
                img={data.img}
                link={data.link}
                description={data.description}
                tags={data.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const AnimatedTags = ({ name }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
    >
      <Tag name={name} />
    </motion.div>
  );
}

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
      className="text-[#212121] font-[500] x-sm:text-4xl"
    >
      Popular Video
    </motion.h1>
  );
}

const AnimatedYoutubeCard = ({ title, img, link, description, tags }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
    >
      <YoutubeCard title={title} img={img} link={link} description={description} tags={tags} />
    </motion.div>
  );
}

export default Videos;