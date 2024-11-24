import { useState } from "react";
import Tag from "../InputTag/Tag";

const YoutubeCard = ({ title, img, link, description, tags }) => {

  return (
    <>
      <div className="w-[20rem] rounded-2xl bg-white p-1 transition-all duration-300 hover:bg-[#f7f7f7] x-sm:w-full">
        <a href={link} target="_blank">
          <img src={img} alt="" className="w-full rounded-[10px]" />
        </a>
        <div className="">
          <h2 className="truncate text-[20px] font-[500] text-[#212121]">
            {title}
          </h2>
          <div className="flex flex-wrap gap-2 pt-[3px]">
            {tags.map((tag, index) => {
              return <Tag key={index} name={tag} />;
            })}
          </div>
          <p className="content-start pt-[3px] leading-5 text-gray-500">
            {description.substring(0, 70)}...
          </p>
        </div>
      </div>
    </>
  );
};

export default YoutubeCard;
