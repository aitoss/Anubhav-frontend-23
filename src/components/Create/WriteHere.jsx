import React from "react";
import TextEditor from "../Editor/TextEditor";

const WriteHere = ({ article, setArticle }) => {
  return (
    <div className="flex w-[70%] max-w-[1440px] flex-col items-start justify-center gap-0 rounded-xl md:w-full md:gap-1 pt-4 md:p-5 x-sm:p-0">
      <h1 className="text-left ml-0 md:ml-5 text-2xl font-[500] text-[#212121]">
        Write Here
      </h1>
      <div className="relative mx-auto flex w-full flex-col items-center justify-center text-[#212121]">
        <TextEditor article={article} setArticle={setArticle} />
      </div>
    </div>
  );
};

export default WriteHere;
