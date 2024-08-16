import React from "react";
import Comment from "../../assets/svg/Comment";
import World from "../../assets/images/world.png";
import VideoIcon from "../../assets/svg/VideoIcon";
import Videos from "../../pages/Videos";

const Card = ({ title, bold, description, icon, children }) => (
  <div className="relative h-full w-full overflow-hidden">
    <div className="flex flex-col gap-3 p-8">
      <div className="flex items-center justify-start gap-2">
        {icon}
        <h4 className="text-[16px] font-[400] text-[#212121]">{title}</h4>
      </div>
      <p className="text-[20px] leading-[100%] tracking-tight text-[#a1a1a1]">
        <span className="font-[600] text-[#212121]">{bold}</span>
        {description}
      </p>
    </div>
    {children}
  </div>
);

const Features = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-[#f7f7f8] px-4 pb-32 pt-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center text-left">
        <div className="mx-auto flex h-[500px] w-full flex-row items-center justify-center border-b border-t border-[#d2d2d6] md:h-[1000px] md:flex-col">
          <Card
            title="Collaborate with other writers"
            bold="Create an account on "
            description="our platform and get started with creating and publishing your blog posts."
            icon={<Comment />}
          >
            <div className="absolute bottom-0 right-0">
              <img className="select-none" src={World} alt="" />
            </div>
          </Card>
          <div className="h-full w-[1px] bg-[#d2d2d6] md:h-[1px] md:w-full" />
          <Card
            title="Video Collection"
            bold="Prefer Videos Over Blogs? "
            description="No worries! We've got an exciting collection of videos that bring the same inspiring stories and useful insights right to your screen."
            icon={<VideoIcon />}
          >
            <div className="pointer-events-none absolute bottom-0 md:bottom-[-40%] md:left-[30%] left-0 md:w-full x-sm:w-[500px] x-sm:left-[20%] x-sm:bottom-[-50%] w-[800px] -translate-x-[30%] translate-y-[43%] scale-50 select-text rounded-3xl border border-[#d2d2d6] bg-[#fff9] shadow-2xl lg:w-[1050px] lg:translate-y-[40%] xl:w-[1200px]">
              <Videos />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;
