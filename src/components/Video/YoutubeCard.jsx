import { useState } from "react";
import Tag from "../InputTag/Tag";


const YoutubeCard = ({ title, img, link, description, tags }) => {

    return (
        <>
            <div className="w-[20rem] x-sm:w-full bg-white hover:bg-[#f7f7f7] p-1 rounded-2xl transition-all duration-300">
                <a href={link} target="_blank">
                    <img src={img} alt="" className="w-full rounded-[10px]" />
                </a>
                <div className="">
                    <h2 className="text-black font-[500] text-[20px] truncate">{title}</h2>
                    <div className="flex flex-wrap gap-2 pt-[3px]">
                        {tags.map((tag) => {
                            return <Tag name={tag} />;
                        })}
                    </div>
                    <p className="leading-5 pt-[3px] content-start text-gray-500">
                        {description.substring(0, 70)}...
                    </p>
                </div>
            </div>
        </>
    );
};

export default YoutubeCard;