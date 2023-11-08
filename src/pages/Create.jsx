import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import Inputtag from "../components/InputTag/Usertag";
import TextEditor from "../components/Editor/TextEditor";
import { FiUploadCloud } from "react-icons/fi";
import DragDropFiles from "../components/Editor/Drag";
import background from '../assets/bg.png';

function Userinput(props) {
  return (
    <>
      <div className="relative flex flex-col gap-2">
        <input
          type={props.type}
          name={props.title}
          id={props.id}
          className="block w-full rounded-md text-4x1 font-[100] bg-white border-[0.5px] p-3 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-grey-200 focus:outline-none focus:placeholder:text-white md:w-full sm:p-2 sm:text-[13px]"
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
  const UserImage = () => {
    return (
      <>
        <div className="flex justify-center cursor-pointer md:w-full">
          <div>
            <h3 className="text-black flex justify-center mr-1">Your Photo</h3>
            <div className="w-full flex justify-center">
              <div
                className="w-[110px] h-[110px] flex justify-center  rounded-full sm:w-24 sm:h-24"
                onClick={handleFileClick}
              >
                {file ? (
                  <img
                    src={URL.createObjectURL(file)}
                    alt=""
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <FiUploadCloud className="text-black w-full h-full" />
                )}
              </div>
            </div>
            <p className="text-gray-300">
              {file ? null : (
                <p className="md:text-[12px]">
                  JPG, JPEG, PNG, file size no more than 10MB
                </p>
              )}
            </p>
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
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="w-screen flex flex-col gap-3" style={{backgroundImage: `url(${background})`}}>
        <div className=" relative w-screen flex  justify-center  md:h-[70%] p-7">
          <div className="relative w-[70%]   rounded-2xl border-[2px]  bg-white p-7 pb-4 flex flex-col gap-3 hover:shadow-xl md:gap-1  md:w-screen md:p-5">
            {/* basic info */}
            <div className="w-full">
              <h2 className="text-black font-[500] text-2xl ml-2">
                Basic Information
              </h2>
            </div>

            <div className="flex gap-4 md:flex-col">
              <div className="flex flex-col gap-3 p-2 w-[50%] md:w-full md:gap-2">
                <div className="flex flex-col gap-3 md:gap-1">
                  <h4 className="text-gray-700 ml-3">About You</h4>
                  <div className="flex flex-col gap-2">
                    <Userinput id="name" type="text" placeholder="Your Name" />
                    <Userinput
                      id="email"
                      type="email"
                      placeholder="Your Email"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3 md:gap-1">
                  <h4 className="ml-3 text-gray-700">About Company</h4>
                  <div className="flex flex-col gap-2">
                    <Userinput
                      id="name"
                      type="text"
                      placeholder="Company's name"
                    />
                    <Userinput
                      id="email"
                      type="email"
                      placeholder="Offered position"
                    />
                  </div>
                </div>
              </div>

              {/* image upload and tag */}
              <div className="flex flex-col mb-1 p-2 w-[50%] h-full md:w-full">
                <UserImage />
                <div>
                  <Inputtag title="Tags" id="tag" type="text" />
                </div>
              </div>
            </div>

            {/* submit button */}

            <div className="flex flex-col justify-center gap-3">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="focus:bg-black w-5 ml-3"
                />
                <p className="text-black text-[15px]">
                  I agree to the Term of Service
                </p>
              </div>
              <button className="bg-black text-white text-lg font-medium w-full p-2 focus:outline-none hover:bg-white hover:text-black hover:border-black">
                Publish
              </button>
            </div>
          </div>
        </div>

        <div className="w-screen  flex flex-col justify-center items-center md:h-[30%] md:w-[100%]">
          <div className="w-[70%] flex justify-start">
            <h1 className="text-black font-[500] text-2xl ml-4 pb-4">
              Cover Image
            </h1>
          </div>
          <DragDropFiles />
        </div>

        <div className="w-screen items-center flex flex-col justify-center gap-0 pb-5 md:h-[50%] md:w-[100%]">
          <div className="relative w-[70%] flex justify-start pb-7">
            <h1 className="text-black font-[500] text-2xl ml-4">Write Here</h1>
          </div>
          <div className="relative h-[80vh] w-[90%]  text-black flex justify-center">
          <TextEditor />
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
