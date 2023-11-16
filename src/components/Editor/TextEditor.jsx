import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../Editor/Index.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
  ],
};

const TextEditor = () => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className="relative w-[100%]  text-black">
      <div className="row h-[100%] w-[100%] flex flex-col lg:gap-3  gap-6 items-center justify-center ">
        <div className="editor relative h-full w-[70%] flex items-center justify-center md:w-[100%] bg-white">
          <ReactQuill
            modules={modules}
            className="input h-[100%] w-[100%]"
            theme="snow"
            value={value}
            onChange={(content) => setValue(content)}
          />
        </div>
        <div
          className="bg-white preview border-[1px] h-[100%] mt-16 overflow-auto w-[70%]  text-black p-[10px] rounded-xl  shadow-lg shadow-[rgba(0,0,0,0.03)] md:hidden "
          dangerouslySetInnerHTML={{ __html: value }}
        />
      </div>
    </div>
  );
};

export default TextEditor;
