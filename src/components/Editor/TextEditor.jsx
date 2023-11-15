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
    <div className="relative w-[90%]  text-black">
      <div className="row h-[90%] w-[100%] flex lg:flex-row lg:gap-3  gap-6 items-center justify-center bg-white">
        <div className="editor relative h-full w-[50%] flex items-center justify-center md:w-[100%]">
          <ReactQuill
            modules={modules}
            className="input h-[100%] w-[100%]"
            theme="snow"
            value={value}
            onChange={(content) => setValue(content)}
          />
        </div>
        <div
          className="preview border-[2px] h-[110%] mt-16 overflow-auto w-[50%]  text-black p-[10px] rounded-xl shadow-xl md:hidden "
          dangerouslySetInnerHTML={{ __html: value }}
        />
      </div>
    </div>
  );
};

export default TextEditor;
