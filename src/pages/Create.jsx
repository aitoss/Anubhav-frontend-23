import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import Inputtag from "../components/InputTag/Usertag";
import imag from "../assets/images/upload_img.png";
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
  const inputRef = useRef(null);
  const [file, setfile] = useState(null);

  const handleFileClick = (e) => {
    if (inputRef.current) {
      inputRef.current.click();
    }
    e.preventDefault();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setfile(file);
  };

  return (
    <>
      <Navbar />
      <div className=" relative w-[100vw] min-h-screen bg-primary flex justify-center pb-5">
        <div className="relative w-auto h-min top-24 rounded-2xl bg-white p-5">
          <div className="flex flex-col gap-3">
            <div className="flex justify-center cursor-pointer">
              <div className="w-24 h-24" onClick={handleFileClick}>
                {file ? (
                  <img
                    src={URL.createObjectURL(file)}
                    alt=""
                    className="w-28 h-24 object-cover rounded-full"
                  />
                ) : (
                  <img
                    src={imag}
                    alt=""
                    className="w-24 h-24 object-cover rounded"
                  />
                )}
              </div>
              <input
                type="file"
                ref={inputRef}
                name=""
                id=""
                onClick={handleFileChange}
                className="hidden"
              />
            </div>
            <div className="flex justify-center">
            <button className='bg-blue-700 text-lg font-semibold p-1 w-40' onClick={handleFileClick}>Upload Image</button>
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
            <button className="bg-blue-700 text-lg font-semibold">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
