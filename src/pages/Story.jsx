import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { Timeline } from "../components/Timeline/timeline";
const Story = () => {
    const data = [
        {
          title: "2024",
          content: (
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                Built and launched Aceternity UI and Aceternity UI Pro from scratch
              </p>
              <div className="grid grid-cols-2 gap-4">
             
              </div>
            </div>
          ),
        },
        {
          title: "Early 2023",
          content: (
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                I usually run out of copy, but when I see content this big, I try to
                integrate lorem ipsum.
              </p>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                Lorem ipsum is for people who are too lazy to write copy. But we are
                not. Here are some more example of beautiful designs I built.
              </p>
              <div className="grid grid-cols-2 gap-4">
              </div>
            </div>
          ),
        },
        {
          title: "Changelog",
          content: (
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                Deployed 5 new components on Aceternity today
              </p>
              <div className="mb-8">
                <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                  ✅ Card grid component
                </div>
                <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                  ✅ Startup template Aceternity
                </div>
                <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                  ✅ Random file upload lol
                </div>
                <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                  ✅ Himesh Reshammiya Music CD
                </div>
                <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                  ✅ Salman Bhai Fan Club registrations open
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://assets.aceternity.com/pro/hero-sections.png"
                  alt="hero template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <img
                  src="https://assets.aceternity.com/features-section.png"
                  alt="feature template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <img
                  src="https://assets.aceternity.com/pro/bento-grids.png"
                  alt="bento template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <img
                  src="https://assets.aceternity.com/cards.png"
                  alt="cards template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
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
            <section className="mx-auto w-[100%] max-w-[1400px] lg:w-[70%] px-4 py-8 flex-1 overflow-y-auto">
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
                            <div className="flex flex-col pt-8 justify-start items-start">
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
