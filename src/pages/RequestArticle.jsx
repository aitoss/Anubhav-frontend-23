import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import background2 from "../assets/dots-pattern.svg";
import Footer from "../components/Footer/Footer";
import axios from "axios";
import { BACKEND_URL } from "../constants";
import ErrorMessage from "../components/notification/ErrorMessage";
import SuccessMessage from "../components/notification/SuccessMessage";
import ButtonV5 from "../components/pixaui/buttonv5";
import Spinner from "../assets/Spinner";

const RequestArticle = () => {
  const initialState = {
    name: "",
    seniorName: "",
    email: "",
    link: "",
    company: "",
    note: "",
  };

  const [error, setError] = useState(null);
  const [value, setValue] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [requestSend, setRequestSend] = useState(null);
  const [companySuggestions, setCompanySuggestions] = useState([]);

  useEffect(() => {
    const fetchCompanySuggestions = async () => {
      try {
        const response = await axios.get(BACKEND_URL + "/companies");
        setCompanySuggestions(response.data);
      } catch (error) {
        console.error("Error fetching company suggestions:", error);
      }
    };
    fetchCompanySuggestions();
  }, []);

  const addError = (message) => {
    setError(message);
    setTimeout(() => {
      setError(null);
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      const requestData = {
        requesterName: value.name,
        requesteeName: value.seniorName,
        requesteeContact: value.link,
        company: value.company,
        note: value.note,
        requesterEmailId: value.email,
      };
      // await axios.post(
      //   BACKEND_URL+ "/reqarticle",
      //   requestData
      // );
      setIsLoading(false);
      setRequestSend("Request Sent Successfully");
      setValue(initialState);
    } catch (error) {
      addError("Internal server error");
      console.error("Error:", error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col h-screen overflow-hidden justify-start items-center">
        <div
          className="flex flex-col mx-auto overflow-hidden pt-32 justify-center gap-3 items-center"
        // style={{ backgroundImage: `url(${background2})` }}
        >
          {/* basic info */}
          <div className="w-[100%] flex justify-center">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className=" w-[650px]  md:w-full max-w-[1600px] overflow-hidden flex flex-col gap-3 md:gap-1 md:px-3"
            >
              <div className="w-full">
                <motion.div
                  initial={{ opacity: 0, translateY: 10 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  exit={{ opacity: 0, translateY: 100 }}
                  transition={{ duration: 0.15, delay: 0.05 }}
                >
                  <h2 className="text-[#212121] font-[600] text-2xl ml-2">
                    Whose experience you wanna know?
                  </h2>
                </motion.div>
              </div>

              <div className="flex gap-4 md:flex-col">
                <div className="flex flex-col gap-3 p-2 w-[100%] md:w-full md:gap-2">
                  <div className="flex flex-col gap-3 md:gap-1">
                    <motion.div
                      initial={{ opacity: 0, translateY: 10 }}
                      animate={{ opacity: 1, translateY: 0 }}
                      exit={{ opacity: 0, translateY: 100 }}
                      transition={{ duration: 0.15, delay: 0.07 }}
                    >
                      <h4 className="text-gray-700 ml-2">About You</h4>
                    </motion.div>

                    <div className="flex flex-col gap-2">
                      <div className="relative flex flex-col gap-2">
                        <motion.div
                          initial={{ opacity: 0, translateY: 10 }}
                          animate={{ opacity: 1, translateY: 0 }}
                          exit={{ opacity: 0, translateY: 100 }}
                          transition={{ duration: 0.15, delay: 0.09 }}
                        >
                          <input
                            required
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            value={value.name}
                            onChange={handleChange}
                            className="w-full rounded-lg text-md bg-white border-[1px] shadow-sm shadow-[#00000010] ring ring-transparent border-[#78788033] p-3 text-[#3C3C43]  placeholder:text-[#3C3C4399] focus:outline-none focus:placeholder:text-[#3c3c4350] md:w-full sm:p-2 sm:text-[13px]"
                          />
                        </motion.div>
                      </div>

                      <div className="relative flex flex-col gap-2">
                        <motion.div
                          initial={{ opacity: 0, translateY: 10 }}
                          animate={{ opacity: 1, translateY: 0 }}
                          exit={{ opacity: 0, translateY: 100 }}
                          transition={{ duration: 0.15, delay: 0.11 }}
                        >
                          <input
                            required
                            type="email"
                            name="email"
                            id="email"
                            placeholder="College mail ID"
                            value={value.email}
                            onChange={handleChange}
                            className="w-full rounded-lg text-md bg-white border-[1px] shadow-sm shadow-[#00000010] ring ring-transparent border-[#78788033] p-3 text-[#3C3C43]  placeholder:text-[#3C3C4399] focus:outline-none focus:placeholder:text-[#3c3c4350] md:w-full sm:p-2 sm:text-[13px]"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 md:gap-1">
                    <motion.div
                      initial={{ opacity: 0, translateY: 10 }}
                      animate={{ opacity: 1, translateY: 0 }}
                      exit={{ opacity: 0, translateY: 100 }}
                      transition={{ duration: 0.15, delay: 0.13 }}
                    >
                      <h4 className="ml-2 text-gray-700">About Senior</h4>
                    </motion.div>
                    <div className="flex flex-col gap-2">
                      <div className="relative flex flex-col gap-2">
                        <motion.div
                          initial={{ opacity: 0, translateY: 10 }}
                          animate={{ opacity: 1, translateY: 0 }}
                          exit={{ opacity: 0, translateY: 100 }}
                          transition={{ duration: 0.15, delay: 0.15 }}
                        >
                          <input
                            required
                            type="text"
                            name="seniorName"
                            id="name"
                            placeholder="Senior’s name"
                            value={value.seniorName}
                            onChange={handleChange}
                            className="w-full rounded-lg text-md bg-white border-[1px] shadow-sm shadow-[#00000010] ring ring-transparent border-[#78788033] p-3 text-[#3C3C43]  placeholder:text-[#3C3C4399] focus:outline-none focus:placeholder:text-[#3c3c4350] md:w-full sm:p-2 sm:text-[13px]"
                          />
                        </motion.div>
                      </div>

                      <div className="relative flex flex-col gap-2">
                        <motion.div
                          initial={{ opacity: 0, translateY: 10 }}
                          animate={{ opacity: 1, translateY: 0 }}
                          exit={{ opacity: 0, translateY: 100 }}
                          transition={{ duration: 0.15, delay: 0.16 }}
                        >
                          <input
                            required
                            type="text"
                            name="link"
                            id="email"
                            placeholder="Senior’s any social media link"
                            value={value.link}
                            onChange={handleChange}
                            className="w-full rounded-lg text-md bg-white border-[1px] shadow-sm shadow-[#00000010] ring ring-transparent border-[#78788033] p-3 text-[#3C3C43]  placeholder:text-[#3C3C4399] focus:outline-none focus:placeholder:text-[#3c3c4350] md:w-full sm:p-2 sm:text-[13px]"
                          />
                        </motion.div>
                      </div>
                      <div className="relative flex flex-col gap-2">
                        <motion.div
                          initial={{ opacity: 0, translateY: 10 }}
                          animate={{ opacity: 1, translateY: 0 }}
                          exit={{ opacity: 0, translateY: 100 }}
                          transition={{ duration: 0.15, delay: 0.17 }}
                        >
                          <input
                            required
                            type="text"
                            name="company"
                            id="email"
                            placeholder="Company Name"
                            list="companySuggestions"
                            value={value.company}
                            onChange={handleChange}
                            className="w-full rounded-lg text-md bg-white border-[1px] shadow-sm shadow-[#00000010] ring ring-transparent border-[#78788033] p-3 text-[#3C3C43]  placeholder:text-[#3C3C4399] focus:outline-none focus:placeholder:text-[#3c3c4350] md:w-full sm:p-2 sm:text-[13px]"
                          />
                        </motion.div>
                        <datalist id="companySuggestions">
                          {companySuggestions.map((suggestion, index) => (
                            <option key={index} value={suggestion} />
                          ))}
                        </datalist>
                      </div>

                      <div className="relative flex flex-col gap-2">
                        <motion.div
                          initial={{ opacity: 0, translateY: 10 }}
                          animate={{ opacity: 1, translateY: 0 }}
                          exit={{ opacity: 0, translateY: 100 }}
                          transition={{ duration: 0.15, delay: 0.18 }}
                        >
                          <textarea
                            required
                            rows="4"
                            name="note"
                            id="email"
                            placeholder="Personal note"
                            value={value.note}
                            onChange={handleChange}
                            className="w-full rounded-lg text-md bg-white border-[1px] shadow-sm shadow-[#00000010] ring ring-transparent border-[#78788033] p-3 text-[#3C3C43]  placeholder:text-[#3C3C4399] focus:outline-none focus:placeholder:text-[#3c3c4350] md:w-full sm:p-2 sm:text-[13px]"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* submit button */}
              <motion.div
                initial={{ opacity: 0, translateY: 10 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: 100 }}
                transition={{ duration: 0.15, delay: 0.2 }}
              >
                <div className="flex flex-col justify-center gap-3">
                  <ButtonV5 icon={false}>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="p-0 outline-none focus:outline-none font-[400]"
                    >
                      {isLoading ?
                        <div className="flex items-center justify-center gap-1"> Processing <Spinner /></div>
                        :
                        <div className="flex justify-center items-center gap-1">Send Request
                          {/* airplane svg */}
                          <div className="flex w-5 justify-end items-center overflow-hidden">
                            <div className="w-5">
                              <svg className={`h-5 w-5 group-hover:translate-x-[100%] translate-y-[66%] group-hover:translate-y-[0%]  group-hover:opacity-100 group-hover:duration-300 translate-x-[0%] opacity-0 duration-0 text-[#ffffff80] group-hover:text-[#ffffff] transition-all`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.39993 6.31991L15.8899 3.48991C19.6999 2.21991 21.7699 4.29991 20.5099 8.10991L17.6799 16.5999C15.7799 22.3099 12.6599 22.3099 10.7599 16.5999L9.91993 14.0799L7.39993 13.2399C1.68993 11.3399 1.68993 8.22991 7.39993 6.31991Z" stroke="#f0f0f0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10.1101 13.6501L13.6901 10.0601" stroke="#f0f0f0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                            </div>
                            <div className="w-5">
                              <svg className={`h-5 w-5 group-hover:translate-x-[100%] group-hover:-translate-y-[66%] translate-y-[0%] group-hover:opacity-0 group-hover:duration-300 translate-x-[0%] opacity-100 duration-0 text-[#ffffff80] group-hover:text-[#ffffff] transition-all`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.39993 6.31991L15.8899 3.48991C19.6999 2.21991 21.7699 4.29991 20.5099 8.10991L17.6799 16.5999C15.7799 22.3099 12.6599 22.3099 10.7599 16.5999L9.91993 14.0799L7.39993 13.2399C1.68993 11.3399 1.68993 8.22991 7.39993 6.31991Z" stroke="#f0f0f0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10.1101 13.6501L13.6901 10.0601" stroke="#f0f0f0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                            </div>
                          </div>
                        </div>}
                    </button>
                  </ButtonV5>
                  <div className="h-16"></div>
                </div>
              </motion.div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <ErrorMessage error={error} />
      <SuccessMessage
        requestSend={requestSend}
        setRequestSend={setRequestSend}
      />
    </>
  );
};

export default RequestArticle;
