import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Inputtag from "../components/InputTag/Usertag";
// import Texteditor from "../components/Editor/TextEditor";

function Userinput(props) {
  return (
    <>
      <div className="relative flex flex-col gap-2">
        <label
          htmlFor="title"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          {props.title}
        </label>
        <input
          type={props.type}
          name={props.title}
          id={props.id}
          className="block w-full rounded-md bg-secondry border-opacity-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-secondry-900  focus:outline-none sm:text-xs sm:leading-6"
          placeholder={props.placeholder}
        />
      </div>
    </>
  );
}

const Create = () => {
  return (
    <>
      <Navbar />
      <div className="w-[100vw] h-16"></div>
      <div className="w-[100vw] h-5/6 bg-primary flex justify-center">
        <div className="relative w-90 h-min top-14 rounded-2xl bg-white p-7">
          <form action="" className="flex flex-col gap-3">
            <div>
              <div></div>
              <input type="file" name="" id="" />
            </div>
            <Userinput
              title="Title"
              id="title"
              type="text"
              placeholder="Title"
            />
            <Userinput
              title="Author Name"
              id="name"
              type="text"
              placeholder="Enter your name..."
            />
            <Userinput
              title="Company Name"
              id="company"
              type="text"
              placeholder="Enter your company name..."
            />
            <Userinput
              title="Email"
              id="email"
              type="email"
              placeholder="@something.com"
            />
            <Inputtag title="Tags" id="tag" type="text" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
