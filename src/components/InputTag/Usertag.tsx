import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { FiArrowRight } from "react-icons/fi";

//commit
const Inputtag = () => {
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);

  const handleChange = (e) => {
    setTag(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && tag.trim() !== "") {
      addTag();
    }
  };

  const handleClick = () => {
    if (tag.trim() !== "") {
      addTag();
    }
  };

  const addTag = () => {
    setTags([...tags, tag]);
    setTag("");
  };

  const handleTagDelete = (index) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1);
    setTags(updatedTags);
  };
  return (
    <div>
      <div className="relative flex flex-col gap-[5.5px]">
        <h4 className="text-black ml-3">Tags</h4>
        <div className="flex flex-wrap gap-2 w-full md:w-full overflow-y-auto">
          {tags.map((tagItem, index) => (
            <div
              key={index}
              className="flex bg-[#212121] p-1 px-2 items-center rounded-full hover:bg-[#313131]"
            >
              <span className="text-white font-light text-[20px] text-center text-base">
                {tagItem}
              </span>
              <span
                onClick={() => handleTagDelete(index)}
                className="cursor-pointer ml-1"
              >
                <RxCross1 className="h-[14px] items-center" />
              </span>
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            name="tag"
            className="w-full rounded-lg text-md bg-white border-[1px] shadow-sm shadow-[#00000020] ring ring-transparent border-[#78788033] p-3 text-[#3C3C43]  placeholder:text-[#3C3C4399] focus:outline-none focus:placeholder:text-[#3c3c4350] md:w-full sm:p-2 sm:text-[13px]"
            placeholder="Tags relevant to your field"
            value={tag}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </div>
  );
};

export default Inputtag;
