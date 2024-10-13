import React, { useState, useRef, useEffect } from "react";
import Inputtag from "../InputTag/Usertag";
import Upload from "../../assets/images/upload.svg";
import axios from "axios";

const BasicInformation = ({
  value,
  setValue,
  tags,
  setTags,
  file,
  setFile,
  bannerImage,
  setbannerImage,
}) => {
  const inputRef = useRef();

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const UploadFile = async () => {
    const file = inputRef.current.files[0];
    setFile(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        "https://api.imgbb.com/1/upload?key=cc540dc0e2847dccaa0d727a71651587",
        formData,
      );
      setbannerImage(response.data.data.display_url);
      console.log("Image uploaded: ", response.data.data.display_url);
    } catch (error) {
      console.log("Error uploading image: ", error);
    }
  };

  const UserImage = () => {
    return (
      <>
        <h3 className="bg -mb-2 flex justify-start text-[#212121]">
          Banner Image
        </h3>
        <div className="border-[rgba(0, 0, 0, 0.15)] flex h-[80%] w-full flex-col items-center justify-center gap-2 rounded-xl border-[2px] border-dashed bg-white md:w-full">
          <div className="flex w-full justify-center">
            <div className="flex h-[150px] w-[150px] justify-center rounded-full sm:h-24 sm:w-24">
              {file ? (
                <img
                  src={file}
                  alt=""
                  className="h-full w-full rounded-full object-cover"
                />
              ) : (
                <img
                  className="cursor-pointer"
                  src={Upload}
                  onClick={(e) => {
                    inputRef.current.click();
                    e.preventDefault();
                  }}
                />
              )}
            </div>
          </div>
          <p className="text-gray-300">
            {file ? null : (
              <>
                <h1 className="text-center text-xs font-[300] text-[#C3C3C3]">
                  JPG, JPEG, PNG file size no more than 10MB
                </h1>
                <h1 className="text-center text-xs font-[400] text-[#322e2e]">
                  Keep the image ratio to 280x180 px
                </h1>
              </>
            )}
          </p>
          {file && (
            <div
              className="flex h-[20px] cursor-pointer items-center justify-center gap-1 border-b border-[#fff] text-[#717171] hover:border-[#717171]"
              onClick={() => setFile(null)}
            >
              Remove <span className="text-[24px]">×</span>
            </div>
          )}
          <input
            type="file"
            ref={inputRef}
            name=""
            id=""
            onChange={UploadFile}
            className="hidden"
          />
        </div>
      </>
    );
  };

  return (
    <div className="flex w-[100%] max-w-[100%] justify-center md:h-[70%] md:w-[90%] pt-4">
      <div className="relative flex w-[70%] flex-col gap-3 rounded-xl pb-4 md:w-full md:gap-1 md:p-5 x-sm:p-0">
        <div className="w-full">
          <h2 className="text-2xl font-[500] text-[#212121]">
            Basic Information
          </h2>
        </div>

        <div className="g flex md:flex-col">
          <div className="flex w-[50%] flex-col gap-3 md:w-full md:gap-2">
            <div className="flex flex-col gap-3 md:gap-1">
              <h4 className="text-[#212121]">About You</h4>

              <div className="flex flex-col gap-2">
                <div className="relative flex flex-col gap-2">
                  <input
                    required
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={value.name}
                    onChange={handleChange}
                    className="text-md w-full rounded-lg border-[1px] border-[#78788033] bg-white p-3 text-[#3C3C43] shadow-sm shadow-[#00000020] ring ring-transparent placeholder:text-[#3C3C4399] focus:outline-none focus:placeholder:text-[#3c3c4350] sm:p-2 sm:text-[13px] md:w-full"
                  />
                </div>

                <div className="relative flex flex-col gap-2">
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={value.email}
                    onChange={handleChange}
                    className="text-md w-full rounded-lg border-[1px] border-[#78788033] bg-white p-3 text-[#3C3C43] shadow-sm shadow-[#00000020] ring ring-transparent placeholder:text-[#3C3C4399] focus:outline-none focus:placeholder:text-[#3c3c4350] sm:p-2 sm:text-[13px] md:w-full"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 md:gap-1">
              <h4 className="text-[#212121]">About Company</h4>
              <div className="flex flex-col gap-2">
                <div className="relative flex flex-col gap-2">
                  <input
                    required
                    type="text"
                    name="company"
                    id="name"
                    list="companySuggestions"
                    placeholder="Company's name"
                    value={value.company}
                    onChange={handleChange}
                    className="text-md w-full rounded-lg border-[1px] border-[#78788033] bg-white p-3 text-[#3C3C43] shadow-sm shadow-[#00000020] ring ring-transparent placeholder:text-[#3C3C4399] focus:outline-none focus:placeholder:text-[#3c3c4350] sm:p-2 sm:text-[13px] md:w-full"
                  />
                </div>

                <div className="relative flex flex-col gap-2">
                  <select
                    required
                    name="position"
                    id="position"
                    value={value.position}
                    onChange={handleChange}
                    className="text-md w-full rounded-lg border-[1px] border-[#78788033] bg-white p-3 text-[#3C3C43] shadow-sm shadow-[#00000020] ring ring-transparent placeholder:text-[#3C3C4399] focus:outline-none focus:placeholder:text-[#3c3c4350] sm:p-2 sm:text-[13px] md:w-full"
                  >
                    <option value="">Select Position</option>
                    <option value="Internship">Internship</option>
                    <option value="FullTime">Full Time</option>
                    <option value="Interview-experience">
                      Interview Experience
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 md:gap-1">
              <h4 className="text-[#212121]">Title</h4>
              <div className="flex flex-col gap-2">
                <div className="relative flex flex-col gap-2">
                  <div className="relative flex flex-col gap-2">
                    <input
                      required
                      type="text"
                      name="title"
                      id="title"
                      placeholder="Blog Title"
                      value={value.title}
                      onChange={handleChange}
                      className="text-md w-full rounded-lg border-[1px] border-[#78788033] bg-white p-3 text-[#3C3C43] shadow-sm shadow-[#00000020] ring ring-transparent placeholder:text-[#3C3C4399] focus:outline-none focus:placeholder:text-[#3c3c4350] sm:p-2 sm:text-[13px] md:w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-full w-[50%] flex-col gap-3 pl-2 md:pl-0 pt-2 md:w-full">
            <UserImage />
            <Inputtag tags={tags} setTags={setTags} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInformation;
