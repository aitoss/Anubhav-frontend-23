import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import background2 from "../assets/dots-pattern.svg";
import Footer from "../components/Footer/Footer";
import axios from "axios";
import { BACKEND_URL } from "../constants";
import ErrorMessage from "../components/notification/ErrorMessage";
import SuccessMessage from "../components/notification/SuccessMessage";

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
      setRequestSend("Request Send Successfully");
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
      <div className="flex flex-col h-screen overflow-hidden justify-center items-center">
          <div
            className="flex flex-col mx-auto overflow-hidden mt-6 justify-center gap-3 items-center"
            style={{ backgroundImage: `url(${background2})` }}
          >
        {/* basic info */}
        <div className="  w-[100%] flex  justify-center  py-7">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className=" w-full max-w-[1600px] overflow-hidden rounded-xl border-[1px]  bg-white p-7 pb-4 flex flex-col gap-3  shadow-lg shadow-[rgba(0,0,0,0.05)] md:gap-1  md:w-full md:p-5"
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
                          className="w-full rounded-lg text-md bg-white border-[1px] shadow-sm shadow-[#00000020] ring ring-transparent border-[#78788033] p-3 text-[#3C3C43]  placeholder:text-[#3C3C4399] focus:outline-none focus:placeholder:text-[#3c3c4350] md:w-full sm:p-2 sm:text-[13px]"
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
                          className="w-full rounded-lg text-md bg-white border-[1px] shadow-sm shadow-[#00000020] ring ring-transparent border-[#78788033] p-3 text-[#3C3C43]  placeholder:text-[#3C3C4399] focus:outline-none focus:placeholder:text-[#3c3c4350] md:w-full sm:p-2 sm:text-[13px]"
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
                          className="w-full rounded-lg text-md bg-white border-[1px] shadow-sm shadow-[#00000020] ring ring-transparent border-[#78788033] p-3 text-[#3C3C43]  placeholder:text-[#3C3C4399] focus:outline-none focus:placeholder:text-[#3c3c4350] md:w-full sm:p-2 sm:text-[13px]"
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
                          className="w-full rounded-lg text-md bg-white border-[1px] shadow-sm shadow-[#00000020] ring ring-transparent border-[#78788033] p-3 text-[#3C3C43]  placeholder:text-[#3C3C4399] focus:outline-none focus:placeholder:text-[#3c3c4350] md:w-full sm:p-2 sm:text-[13px]"
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
                          className="w-full rounded-lg text-md bg-white border-[1px] shadow-sm shadow-[#00000020] ring ring-transparent border-[#78788033] p-3 text-[#3C3C43]  placeholder:text-[#3C3C4399] focus:outline-none focus:placeholder:text-[#3c3c4350] md:w-full sm:p-2 sm:text-[13px]"
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
                          className="w-full rounded-lg text-md bg-white border-[1px] shadow-sm shadow-[#00000020] ring ring-transparent border-[#78788033] p-3 text-[#3C3C43]  placeholder:text-[#3C3C4399] focus:outline-none focus:placeholder:text-[#3c3c4350] md:w-full sm:p-2 sm:text-[13px]"
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
                <button
                  type="Subm"
                  disabled={isLoading}
                  className="bg-[#212121] text-white text-lg font-medium w-full p-2 focus:outline-none hover:bg-[#313131] hover:text-[#fff] hover:border-[#212121]"
                >
                  {isLoading ? "Processing..." : "Send Request"}
                </button>
              </div>
            </motion.div>
          
          </form>
        </div>
      </div>
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
        <ErrorMessage error={error} />
          <SuccessMessage
            requestSend={requestSend}
            setRequestSend={setRequestSend}
          />


    </>
  );
};

export default RequestArticle;
