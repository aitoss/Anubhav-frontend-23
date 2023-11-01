import React, { useState } from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';

// comment

const Inputtag = (props) => {
  const [tags, settags] = useState<string[]>([]);
  const [tag, settag] = useState<string>("");
  const [size, setsize] = useState(true);

  function Tag(props) {
    return (
      <div className="h-auto flex flex-row
       bg-blue-500  pl-2 rounded-md">
        <li className="text-black list-none text-sm">
          {props.title}
          <span><CloseTwoToneIcon className="text-sm"/></span>
        </li>
      </div>
    );
  }
  function handleChange(e) {
    settag(e.target.value);
    console.log(tag);
  }

  function handleClick() {
    settags([...tags, tag]);
    settag("");
    console.log("Clicked");
    console.log(tags);
    setsize(false);
  }

  return (
    <div>
      <div className="relative flex flex-col gap-2">
        <label
          htmlFor="title"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          {props.title}
        </label>
        <div className="flex content-start min-h-1/2">
        <div className="flex gap-2">
        {!size &&
          tags.map((tagItem, index) => {
            return <Tag key={index} id={index} title={tagItem} />;
          })}
          </div>
          </div>
        <div className="flex gap-2">
          <input
            type={props.type}
            name={props.title}
            id={props.id}
            className="block w-full rounded-md bg-secondry border-opacity-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-secondry-900  focus:outline-none sm:text-xs sm:leading-6"
            placeholder={props.placeholder}
            onChange={handleChange}
            value={tag}
          />
          <span
            onClick={handleClick}
            className="relative text-white mb-1 text-3xl cursor-pointer bg-blue-500 px-1 rounded-md"
          >
            <ArrowForwardIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Inputtag;
