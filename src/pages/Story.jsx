import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { Timeline } from "../components/Timeline/timeline";
const Story = () => {
    const data = [
        {
          title: "Dec 2020",
          content: (
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              The project originated from a random conversation between Arpit and Akshay sir. After that with the formation of the team with Satya sir and few club juniors, and they started the development. The first version was designed by Rishabh sir.

              </p>
    
            </div>
          ),
        },
        {
          title: "Jan 2021",
          content: (
            <div>
                <h1 className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-[24px]">Launch</h1>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              By this time the basic portal was ready as per the expected design. Anubhav was launched by director sir and then shared with all through AIT Alumni page. The project received lots of compliments from everyone.
              </p>
              <div className="">
                <img
                  src="https://raw.githubusercontent.com/aitoss/Anubhav-backend/main/gallery/Screenshot%20(184).png"
                  alt="hero template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              
              </div>
            </div>
          ),
        },
        {
          title: "July 2021",
          content: (
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
              Due to pandemic juniors were unable to properly connect with seniors to seek guidance. So Arpit sir along with Abhishek sir started the Anubhav-video Interview series. In which seniors shared their college life, tech-non tech journey, along with tips for juniors. All the videos are available on OSS youtube channel.
              </p>
              <div className="mb-8">
               
              </div>
              <div className="">
                <img
                  src="https://user-images.githubusercontent.com/31367960/125487646-c911b5a5-afdd-4b2a-893f-58a9239d9b63.png"
                  alt="hero template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              
              </div>
            </div>
          ),
        },
        {
            title: "Aug 2021",
            content: (
              <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                With start of new academic session. The product ownership is transferred to Akshay, Satya, Rishabh and Palak</p>
                <div className="mb-8">
                 
                </div>
                <div className="">
                  <img
                    src="https://user-images.githubusercontent.com/31367960/125487646-c911b5a5-afdd-4b2a-893f-58a9239d9b63.png"
                    alt="hero template"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60  shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                
                </div>
              </div>
            ),
          },
      ];
    return (
<>
    <Navbar />

    <div className="flex flex-col mx-auto min-h-screen">
        <div className="h-16 md:h-8"></div>
        <div className="flex flex-col items-center flex-1">
            <section className="mx-auto w-[100%] max-w-[1400px] lg:w-[70%] px-4 py-4 flex-1 overflow-y-auto">
            <div className="text-xl text-black">
                            <motion.div
                                initial={{ opacity: 0, translateY: 10 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                exit={{ opacity: 0, translateY: 100 }}
                                transition={{ duration: 0.15, delay: 0.05 }}
                            >
                                <h1 className="text-4xl lg:py-8 font-semibold text-center text-black">
                                    Our Story
                                </h1>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, translateY: 10 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                exit={{ opacity: 0, translateY: 100 }}
                                transition={{ duration: 0.15, delay: 0.07 }}
                            >
                                <p>
                                    The story of Anubhav, is as interesting as this portal. With lots of brainstorming discussion, and a motivation to improve this at each possible stage. We have created this mind-blowing portal. Explore this page to know about product owners, how it started, and the timeline for various phases of development.
                                </p>
                            </motion.div>
                            <div className="flex flex-col lg:pt-8 justify-start items-start">
                                <h3 className="font-[500] ">Product Ownership</h3>
                                <p>Anubhav portal is developed and maintained by AIT OSS Club. Club is responsible for the enhancement of the quality of this portal. After its establishment, every year at the start of a new academic session its ownership and control are transferred to next-generation, which mainly consists of third year and final year members. </p>
                            </div>
                        <div className="w-full">
                        <Timeline data={data} />


                        </div>
                        
                            {/*  */}
                        </div>
            </section>
        </div>
        <Footer />
    </div>
</>

    );
};

export default Story;
