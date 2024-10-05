import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ErrorMessage from "../components/notification/ErrorMessage";
import SuccessMessage from "../components/notification/SuccessMessage";
import axios from "axios";
import { BACKEND_URL } from "../constants";
import ButtonV5 from "../components/ui/buttonv5";
import { Link } from "react-router-dom";
import Spinner from "../components/ui/Spinner";
import BasicInformation from "../components/Create/BasicInformation";
import WriteHere from "../components/Create/WriteHere";
import SubmittedCard from "../components/Create/SubmittedCard";

const Create = () => {
  const initialState = {
    name: "",
    email: "",
    company: "",
    position: "",
    title: "",
  };

  const [file, setFile] = useState(null);
  const [bannerImage, setbannerImage] = useState(null);
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [article, setArticle] = useState("");
  const [value, setValue] = useState(initialState);
  const [requestSend, setRequestSend] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    const savedContent = localStorage.getItem("editorContent");
    if (savedContent) {
      const content = JSON.parse(savedContent);
      setArticle(content.article);
      setValue(content.value);
    }
  }, []);

  useEffect(() => {
    const Debouncer = setTimeout(() => {
      const content = {
        value: value,
        article: article,
      };
      const savedContent = JSON.stringify(content);
      localStorage.setItem("editorContent", savedContent);
    }, 500);
    return () => clearTimeout(Debouncer);
  }, [article, value]);

  const addError = (message) => {
    setError(message);
    setTimeout(() => {
      setError(null);
    }, 3000);
  };

  const publishPost = async () => {
    setStep(step + 1);
    if (article === "") {
      addError("Article cannot be empty");
      return;
    }

    if (!file) {
      addError("Please upload a banner image");
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post(BACKEND_URL + "/blogs", {
        title: value.title,
        authorName: value.name,
        authorEmailId: value.email,
        companyName: value.company,
        role: value.position,
        articleTags: tags,
        article: article,
        image: bannerImage,
      });
      setIsLoading(false);
      console.log("Article submitted successfully");
      setRequestSend("Article submitted successfully");
      setValue(initialState);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting post:", error.response.data);
      setIsLoading(false);
    }
  };

  const handleNext = () => {
    if (step === 1) {
      if (
        !value.name ||
        !value.email ||
        !value.company ||
        !value.position ||
        !value.title ||
        !file
      ) {
        addError("Please fill all fields and upload a banner image");
        return;
      }
    }
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  // Calculate progress
  const progressPercentage = ((step - 1) / 2) * 100;

  return (
    <>
      <Navbar />
      {isSubmitted && <SubmittedCard />}
      {isVisible && (
        <p className="relative flex w-full items-center justify-center bg-white/40 pb-1 pt-16 text-[#212121] x-sm:text-sm">
          Before writing an article, please read the &nbsp;
          <Link to="/guidelines" className="underline">
            Guidelines
          </Link>
          .
          {/* <svg
            className="absolute right-[6%] cursor-pointer md:right-[4%] x-sm:right-2"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleDismiss}
          >
            <path
              d="M16.0163 15.8805L4.72266 4.58691"
              stroke="#212121"
              strokeWidth="1.42857"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.8796 4.71973L4.58594 16.0134"
              stroke="#212121"
              strokeWidth="1.42857"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg> */}
        </p>
      )}

      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-3 pt-4">
        {/* Progress Bar */}
        <div className="relative mt-4 w-[50%] rounded-full bg-[#d2d7d9]">
          <div className="absolute left-0 top-0 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#212121] text-[#f2f2f2]">
            1
          </div>
          <div className="absolute left-1/2 top-0 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#212121] text-[#f2f2f2]">
            2
          </div>
          <div
            className="h-1 rounded-full bg-[#212121] transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        {step === 1 && (
          <BasicInformation
            value={value}
            setValue={setValue}
            tags={tags}
            setTags={setTags}
            file={file}
            setFile={setFile}
            bannerImage={bannerImage}
            setbannerImage={setbannerImage}
          />
        )}
        {step >= 2 && <WriteHere article={article} setArticle={setArticle} />}
        <div className="flex w-full max-w-[70%] justify-between sm:pb-4 x-sm:pb-8 sm:mt-8 x-sm:mt-20 pb-4 mt-6 xl:mt-0">
          {step > 1 && (
            <div
              onClick={handleBack}
              className="p-0 font-[400] outline-none focus:outline-none"
            >
              <ButtonV5 icon={false} color="#f6f8fb">
                <h5 className="flex gap-1 text-[16px] font-[500] -tracking-[0.2px] text-[#212121]">
                  Previous
                </h5>
              </ButtonV5>
            </div>
          )}

          {step < 2 ? (
            <button
              onClick={handleNext}
              className="ml-auto p-0 font-[400] outline-none focus:outline-none"
            >
              <ButtonV5 icon={true}>Next</ButtonV5>
            </button>
          ) : (
            <button
              onClick={publishPost}
              disabled={isLoading}
              className="ml-auto p-0 font-[400] outline-none focus:outline-none"
            >
              <ButtonV5 disabled={isLoading} icon={false}>
                {isLoading ? (
                  <div className="flex items-center justify-center gap-1 font-[300]">
                    &nbsp; Processing <Spinner color="#fff" />
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-1">
                    Submit
                    {/* airplane svg */}
                    <div className="flex w-5 items-center justify-end overflow-hidden">
                      <div className="w-5">
                        <svg
                          className={`h-5 w-5 translate-x-[0%] translate-y-[66%] text-[#ffffff80] opacity-0 transition-all duration-0 group-hover:translate-x-[100%] group-hover:translate-y-[0%] group-hover:text-[#ffffff] group-hover:opacity-100 group-hover:duration-300`}
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.39993 6.31991L15.8899 3.48991C19.6999 2.21991 21.7699 4.29991 20.5099 8.10991L17.6799 16.5999C15.7799 22.3099 12.6599 22.3099 10.7599 16.5999L9.91993 14.0799L7.39993 13.2399C1.68993 11.3399 1.68993 8.22991 7.39993 6.31991Z"
                            stroke="#f0f0f0"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10.1101 13.6501L13.6901 10.0601"
                            stroke="#f0f0f0"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="w-5">
                        <svg
                          className={`h-5 w-5 translate-x-[0%] translate-y-[0%] text-[#ffffff80] opacity-100 transition-all duration-0 group-hover:-translate-y-[66%] group-hover:translate-x-[100%] group-hover:text-[#ffffff] group-hover:opacity-0 group-hover:duration-300`}
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.39993 6.31991L15.8899 3.48991C19.6999 2.21991 21.7699 4.29991 20.5099 8.10991L17.6799 16.5999C15.7799 22.3099 12.6599 22.3099 10.7599 16.5999L9.91993 14.0799L7.39993 13.2399C1.68993 11.3399 1.68993 8.22991 7.39993 6.31991Z"
                            stroke="#f0f0f0"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10.1101 13.6501L13.6901 10.0601"
                            stroke="#f0f0f0"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
              </ButtonV5>
            </button>
          )}
        </div>

        {requestSend && (
          <SuccessMessage
            message={requestSend}
            onClose={() => setRequestSend(null)}
          />
        )}

        {error && <ErrorMessage message={error} />}
      </div>

      <Footer />
    </>
  );
};

export default Create;
