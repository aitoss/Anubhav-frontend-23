import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import background2 from "../assets/dots-pattern.svg"
import Footer from "../components/Footer/Footer";

const RequestArticle = () => {
  const inputRef = useRef(null);
  const [file, setfile] = useState(null);
  const [value, setValue] = useState({
    name: "",
    seniorName: "",
    email: "",
    link: "",
    note: "",
  });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Navbar />
      <div className="h-16 w-screen md:h-8"></div>
      <div
        className="flex flex-col mt-6 w-screen justify-center gap-3 items-center mx-auto"
        style={{ backgroundImage: `url(${background2})` }}
      >
        {/* basic info */}
        <div className=" relative w-[100%] max-w-[90%] flex  justify-center lg:w-[50%] py-7">
          <form
            onSubmit={(e) => { e.preventDefault(); console.log(value) }}
            className="relative w-[100%] rounded-xl border-[1px]  bg-white p-7 pb-4 flex flex-col gap-3  shadow-lg shadow-[rgba(0,0,0,0.03)] md:gap-1  md:w-full md:p-5">
            <div className="w-full">
              <h2 className="text-[#212121] font-[600] text-2xl ml-2">
                Whose experience you wanna know?
              </h2>
            </div>

            <div className="flex gap-4 md:flex-col">
              <div className="flex flex-col gap-3 p-2 w-[100%] md:w-full md:gap-2">

                <div className="flex flex-col gap-3 md:gap-1">
                  <h4 className="text-gray-700 ml-3">About You</h4>

                  <div className="flex flex-col gap-2">

                    <div className="relative flex flex-col gap-2">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        value={value.name}
                        onChange={handleChange}
                        className="w-full rounded-lg text-md bg-white border-[1px] shadow-sm shadow-[#00000020] ring ring-transparent border-[#78788033] p-3 text-[#3C3C43]  placeholder:text-[#3C3C4399] focus:outline-none focus:placeholder:text-[#3c3c4350] md:w-full sm:p-2 sm:text-[13px]" />
                    </div>

                    <div className="relative flex flex-col gap-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="College mail ID"
                        value={value.email}
                        onChange={handleChange}
                        className="w-full rounded-lg text-md bg-white border-[1px] shadow-sm shadow-[#00000020] ring ring-transparent border-[#78788033] p-3 text-[#3C3C43]  placeholder:text-[#3C3C4399] focus:outline-none focus:placeholder:text-[#3c3c4350] md:w-full sm:p-2 sm:text-[13px]" />
                    </div>

                  </div>

                </div>

                <div className="flex flex-col gap-3 md:gap-1">
                  <h4 className="ml-3 text-gray-700">About Senior</h4>
                  <div className="flex flex-col gap-2">

                    <div className="relative flex flex-col gap-2">
                      <input
                        type="text"
                        name="company"
                        id="name"
                        placeholder="Senior’s name"
                        value={value.seniorName}
                        onChange={handleChange}
                        className="w-full rounded-lg text-md bg-white border-[1px] shadow-sm shadow-[#00000020] ring ring-transparent border-[#78788033] p-3 text-[#3C3C43]  placeholder:text-[#3C3C4399] focus:outline-none focus:placeholder:text-[#3c3c4350] md:w-full sm:p-2 sm:text-[13px]" />
                    </div>

                    <div className="relative flex flex-col gap-2">
                      <input
                        type="text"
                        name="position"
                        id="email"
                        placeholder="Senior’s any social media link"
                        value={value.link}
                        onChange={handleChange}
                        className="w-full rounded-lg text-md bg-white border-[1px] shadow-sm shadow-[#00000020] ring ring-transparent border-[#78788033] p-3 text-[#3C3C43]  placeholder:text-[#3C3C4399] focus:outline-none focus:placeholder:text-[#3c3c4350] md:w-full sm:p-2 sm:text-[13px]" />
                    </div>
                    <div className="relative flex flex-col gap-2">
                      <textarea
                        rows="4"
                        name="position"
                        id="email"
                        placeholder="Personal note"
                        value={value.note}
                        onChange={handleChange}
                        className="w-full rounded-lg text-md bg-white border-[1px] shadow-sm shadow-[#00000020] ring ring-transparent border-[#78788033] p-3 text-[#3C3C43]  placeholder:text-[#3C3C4399] focus:outline-none focus:placeholder:text-[#3c3c4350] md:w-full sm:p-2 sm:text-[13px]"
                      />
                    </div>

                  </div>
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
                  className="focus:bg-[#212121] hover:bg-[#cabfec] w-5 ml-3"
                />
                <p className="text-[#414141] text-[16px]">
                  I agree to the Terms of Service
                </p>
              </div>
              <button className="bg-[#212121] text-white text-lg font-medium w-full p-2 focus:outline-none hover:bg-[#313131] hover:text-[#fff] hover:border-[#212121]">
                Send Request
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default RequestArticle;
