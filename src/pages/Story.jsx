import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Story = () => {

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

                            <div className="space-y-8 pt-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                                {/* Item 1 */}
                                <div className="relative flex items-center justify-center  odd:flex-row-reverse group is-active">
                                    {/* Card */}
                                    <div className="sm:w-[calc(90%-2.5rem)] w-[calc(60%-2.5rem)] p-4 rounded-3xl border shadow">
                                        <div className="flex items-center justify-between space-x-2 mb-1">
                                            <div className="font-caveat font-medium text-[#212121]">The Idea</div>
                                            <div className="font-caveat font-medium text-[#212121]">Dec 2020</div>
                                        </div>
                                        <div className="text-[#515151]">
                                            The project originated from a random conversation between Arpit and Akshay sir. After that with the formation of the team with Satya sir and few club juniors, and they started the development. The first version was designed by Rishabh sir.
                                        </div>
                                    </div>
                                </div>
                                {/* Item 2 */}
                                <div className="relative flex items-center justify-center odd:flex-row-reverse group is-active">
                                    {/* Card */}
                                    <div className="sm:w-[calc(90%-2.5rem)] w-[calc(60%-2.5rem)] p-4 rounded-3xl border shadow">
                                        <div className="flex items-center justify-between space-x-2 mb-1">
                                            <div className="font-caveat font-medium text-[#212121]">The Launch</div>
                                            <div className="font-caveat font-medium text-[#212121]">Jan 2021</div>
                                        </div>
                                        <div className="text-[#515151]">
                                            By this time the basic portal was ready as per the expected design. Anubhav was launched by director sir and then shared with all through AIT Alumni page. The project received lots of compliments from everyone.
                                        </div>
                                    </div>
                                </div>
                                {/* Item 3 */}
                                <div className="relative flex items-center justify-center  odd:flex-row-reverse group is-active">
                                    {/* Card */}
                                    <div className="sm:w-[calc(90%-2.5rem)] w-[calc(60%-2.5rem)] p-4 rounded-3xl border shadow">
                                        <div className="flex items-center justify-between space-x-2 mb-1">
                                            <div className="font-caveat font-medium text-[#212121]">Got 50+ Articles</div>
                                            <div className="font-caveat font-medium text-[#212121]">Apr 2021</div>
                                        </div>
                                        <div className="text-[#515151]">
                                            With continuous engagement from all the students. We touched this milestone of 50+ articles on our portal
                                        </div>
                                    </div>
                                </div>
                                {/* Item 4 */}
                                <div className="relative flex items-center justify-center  odd:flex-row-reverse group is-active">
                                    {/* Card */}
                                    <div className="sm:w-[calc(90%-2.5rem)] w-[calc(60%-2.5rem)] p-4 rounded-3xl border shadow">
                                        <div className="flex items-center justify-between space-x-2 mb-1">
                                            <div className="font-caveat font-medium text-[#212121]">Video Interview Series</div>
                                            <div className="font-caveat font-medium text-[#212121]">June-July 2021</div>
                                        </div>
                                        <div className="text-[#515151]">
                                            Due to pandemic juniors were unable to properly connect with seniors to seek guidance. So Arpit sir along with Abhishek sir started the Anubhav-video Interview series. In which seniors shared their college life, tech-non tech journey, along with tips for juniors. All the videos are available on OSS youtube channel.
                                        </div>
                                    </div>
                                </div>
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
