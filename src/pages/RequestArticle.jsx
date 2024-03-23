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
        const response = await axios.get(BACKEND_URL + '/companies');
        setCompanySuggestions(response.data);
      } catch (error) {
        console.error('Error fetching company suggestions:', error);
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
      addError("Internal server error")
      console.error("Error:", error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="flex flex-col mx-auto overflow-hidden mt-6 w-screen justify-center gap-3 items-center"
        style={{ backgroundImage: `url(${background2})` }}>
        {/* basic info */}
        <div className=" relative w-[100%] max-w-[90%] flex  justify-center lg:w-[50%] py-7">
          <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}
            className="relative w-[100%] max-w-[1400px] rounded-xl border-[1px]  bg-white p-7 pb-4 flex flex-col gap-3  shadow-lg shadow-[rgba(0,0,0,0.05)] md:gap-1  md:w-full md:p-5"
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

                        <input required
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

                        <textarea required
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
                <button type="Subm" disabled={isLoading} className="bg-[#212121] text-white text-lg font-medium w-full p-2 focus:outline-none hover:bg-[#313131] hover:text-[#fff] hover:border-[#212121]">
                  {isLoading ? 'Processing...' : 'Send Request'}
                </button>
              </div>
            </motion.div>
          </form>
        </div>
        <Footer />
      </div>
      < ErrorMessage error={error} />
      <SuccessMessage requestSend={requestSend} setRequestSend={setRequestSend} />
      {/* {requestError && (
        <div
          id="toast-danger"
          class="flex fixed bottom-4 right-4 items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
          role="alert"
        >
          <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
            </svg>
            <span class="sr-only">Error icon</span>
          </div>
          <div class="ms-3 text-sm font-normal">Error Sending The Request.</div>
          <button
            type="button"
            class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            onClick={() => setRequestError(false)}
            aria-label="Close"
          >
            <span class="sr-only">Close</span>
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      )} */}
    </>
  );
};

export default RequestArticle;
