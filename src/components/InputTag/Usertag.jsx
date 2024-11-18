import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import { BACKEND_URL } from "../../constants";

// commit
const Inputtag = ({ setTags, tags }) => {
  useEffect(() => {
    const fetchTagSuggestions = async () => {
      try {
        const response = await axios.get(BACKEND_URL + "/tags");
        setTagSuggestions(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching tag suggestions:", error);
      }
    };

    fetchTagSuggestions();
  }, []);

  const [tagSuggestions, setTagSuggestions] = useState([]);

  const [tag, setTag] = useState("");

  const handleChange = (e) => {
    setTag(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && tag.trim() !== "") {
      e.preventDefault();
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
      <div className="relative flex flex-col">
        <div className="flex w-full flex-wrap gap-2 overflow-y-auto md:w-full">
          <h4 className="text-[#212121]">Tags *</h4>
          {tags.map((tagItem, index) => (
            <div
              key={index}
              className="flex items-center justify-center rounded-full border bg-[#f0f0f0] px-2 transition-all hover:bg-[#e9e9e9]"
            >
              <span className="text-center text-[20px] text-base font-light text-[#212121]">
                {tagItem}
              </span>
              <span
                onClick={() => handleTagDelete(index)}
                className="ml-1 cursor-pointer text-2xl"
              >
                <RxCross1 className="h-[14px] items-center text-[#919191]" />
              </span>
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            name="tag"
            list="tagSuggestions"
            className="text-md w-full rounded-lg border-[1px] border-[#78788033] bg-white p-3 text-[#3C3C43] ring ring-transparent placeholder:text-[#3C3C4399] focus:outline-none focus:placeholder:text-[#3c3c4350] sm:p-2 sm:text-[13px] md:w-full"
            placeholder="Tags relevant to your field"
            value={tag}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          {/* <datalist id="tagSuggestions">
            {tagSuggestions.map((suggestion, index) => (
              <option key={index} value={suggestion._id} />
            ))}
          </datalist> */}
        </div>
      </div>
    </div>
  );
};

export default Inputtag;
