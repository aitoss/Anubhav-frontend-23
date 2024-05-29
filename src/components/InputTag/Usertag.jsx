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
        console.log(response.data);
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
      <div className="relative flex flex-col gap-[5.5px]">
        <h4 className="text-black ml-3">Tags</h4>
        <div className="flex flex-wrap gap-2 w-full md:w-full overflow-y-auto">
          {tags.map((tagItem, index) => (
            <div
              key={index}
              className="flex bg-[#f0f0f0] border px-2 items-center rounded-full hover:bg-[#e9e9e9] transition-all justify-center"
            >
              <span className="text-[#212121] font-light text-[20px] text-center text-base">
                {tagItem}
              </span>
              <span
                onClick={() => handleTagDelete(index)}
                className="cursor-pointer ml-1 text-2xl"
              >
                <RxCross1 className="h-[14px] text-[#919191] items-center" />
              </span>
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            name="tag"
            list="tagSuggestions"
            className="w-full rounded-lg text-md bg-white border-[1px] shadow-sm shadow-[#00000020] ring ring-transparent border-[#78788033] p-3 text-[#3C3C43]  placeholder:text-[#3C3C4399] focus:outline-none focus:placeholder:text-[#3c3c4350] md:w-full sm:p-2 sm:text-[13px]"
            placeholder="Tags relevant to your field"
            value={tag}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <datalist id="tagSuggestions">
            {tagSuggestions.map((suggestion, index) => (
              <option key={index} value={suggestion._id} />
            ))}
          </datalist>
        </div>
      </div>
    </div>
  );
};

export default Inputtag;
