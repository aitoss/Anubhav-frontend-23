import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import "../Editor/Index.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5] }],
    [{ font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
    ],
    ["link", "image"],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    [{ color: [] }, { background: [] }],
  ],
};



const TextEditor = ({ article, setArticle }) => {

  return (
    <div className="relative w-[70%]  text-black">
      <div className="row w-full flex flex-col lg:gap-3 gap-10 items-center justify-center x-sm:gap-16">
        <div className="editor relative h-[60vh] max-h-[80vh] w-full flex items-center justify-center  bg-white md:w-[90vw]">
          <ReactQuill
            modules={modules}
            className="input h-[100%] w-[100%]"
            theme="snow"
            value={article}
            onChange={(content) => setArticle(content)}
          />
        </div>
        <div
          className="bg-white preview border-[2px] h-[60vh] max-h-[80vh] mt-16 overflow-auto w-full  text-black  rounded-xl  shadow-lg shadow-[rgba(0,0,0,0.03)] md:w-[90vw]"
        > <ReactQuill value={article} theme="bubble" readOnly className="w-full h-full" /></div>
      </div>
    </div>
  );
};

export default TextEditor;
