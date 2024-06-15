import React from "react";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import "../Editor/Index.css";
import MDEditor from "@uiw/react-md-editor";

const TextEditor = ({ article, setArticle }) => {
  return (
    <div className="relative w-[70%] text-red pb-10">
      <div className="row w-full flex flex-col lg:gap-3 gap-10 items-center justify-center x-sm:gap-16">
        <div className="editor relative h-[80vh] max-h-[120vh] w-full flex items-center justify-center md:w-[90vw] custom-editor">
          <MDEditor
            value={article}
            onChange={setArticle}
            className="input h-full w-full"
            preview="edit"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
