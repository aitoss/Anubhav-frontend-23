import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { FiArrowRight} from "react-icons/fi";

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
        <div className="flex flex-wrap gap-2 w-[350px] md:w-full">
          {tags.map((tagItem, index) => (
            <div
              key={index}
              className="flex bg-blue-500 px-1 items-center rounded-md"
            >
              <span className="text-white text-[20px] text-center text-base">{tagItem}</span>
              <span
                onClick={() => handleTagDelete(index)}
                className="cursor-pointer ml-1"
              >
                <RxCross1 className=" items-center" />
              </span>
            </div>
          ))}
        </div>
        <div className="flex">
          <input
               type="text"
               name="tag"
               className="block w-full rounded-md text-4x1 bg-white border-[0.5px] p-3 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-grey-200 focus:outline-none focus:placeholder:text-white sm:p-2 sm:text-[13px]"
               placeholder="Tags relevant to your field"
               value={tag}
               onChange={handleChange}
               onKeyDown={handleKeyDown}
          />
          {/* <span
            onClick={handleClick}
            className="relative text-white items-center text-3xl cursor-pointer bg-blue-500 px-1 rounded-md"
          >
            <FiArrowRight className="text-center mt-0.5" />
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default Inputtag;
