import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Inputtag from "../components/InputTag/Usertag";
import TextEditor from "../components/Editor/TextEditor";
import { FiUploadCloud } from "react-icons/fi";
import DragDropFiles from "../components/Editor/Drag";
import background2 from "../assets/dots-pattern.svg";
import Footer from "../components/Footer/Footer";
import Upload from "../assets/images/upload.svg";
import { Link } from "react-router-dom";
import { UploadFile } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../constants";
import ErrorMessage from "../components/notification/ErrorMessage";

const Create = () => {
  const navigate = useNavigate();
  const inputRef = useRef();

  const [file, setFile] = useState(null);
  const [bannerImage, setbannerImage] = useState(null);
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [article, setArticle] = useState("");
  const [value, setValue] = useState({
    name: "",
    email: "",
    company: "",
    position: "",
    title: "",
  });

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
    // clean up the timeout if content changes before delay
    return () => clearTimeout(Debouncer);
  }, [article, value]);

  const addError = (message) => {
    setError(message);
    setTimeout(() => {
      setError(null);
    }, 3000);
  };

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const UploadFile = async () => {
    const file = inputRef.current.files[0];
    setFile(URL.createObjectURL(file));
    console.log(file);

    const formData = new FormData();
    formData.append("image", file);

    try {
      // TODO: hide this key
      const response = await axios.post(
        "https://api.imgbb.com/1/upload?key=cc540dc0e2847dccaa0d727a71651587",
        formData,
      );
      console.log("Response form image cloud", response);
      setbannerImage(response.data.data.display_url);
    } catch (error) {
      console.log("Error uploading image: ", error);
    }
  };

  useEffect(() => {
    console.log("Banner Image", bannerImage);
  }, [bannerImage]);

  const publishPost = async () => {
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
      const id = response.data.createArticle._id;
      console.log("Post published:", response.data);
      navigate("/blog/" + id);
    } catch (error) {
      console.error("Error publishing post:", error.response.data);
      setIsLoading(false);
    }
  };

  const [companySuggestions, setCompanySuggestions] = useState([]);

  useEffect(() => {
    const fetchCompanySuggestions = async () => {
      try {
        const response = await axios.get(BACKEND_URL + "/companies");
        setCompanySuggestions(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching company suggestions:", error);
      }
    };

    fetchCompanySuggestions();
  }, []);

  const UserImage = () => {
    return (
      <>
        <ErrorMessage error={error} />

        <h3 className="ml-3 flex justify-start bg text-[#212121]">Banner Image</h3>
        <div className="border-[rgba(0, 0, 0, 0.15)] bg-white flex h-[80%] w-full flex-col items-center justify-center gap-2 rounded-xl border-[2px] border-dashed p-4 md:w-full">
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
          {/* </div> */}
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
    <>
      <Navbar />

      <div
        className="mx-auto flex max-w-[1440px] flex-col items-center gap-3 pt-16"
        // style={{ backgroundImage: `url(${background2})` }}
      >
        {/* basic info */}
        <div className="relative flex w-[100%] max-w-[100%] justify-center py-7 md:h-[70%] md:w-[90%]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              publishPost();
            }}
            className="relative flex w-[70%] flex-col gap-3 rounded-xl pt-7 pb-4 md:w-full md:gap-1 md:p-5"
          >
            <div className="w-full">
              <h2 className="ml-2 text-2xl font-[500] text-[#212121]">
                Basic Information
              </h2>
            </div>

            <div className="flex gap-4 md:flex-col">
              <div className="flex w-[50%] flex-col gap-3 p-2 md:w-full md:gap-2">
                <div className="flex flex-col gap-3 md:gap-1">
                  <h4 className="ml-3 text-gray-700">About You</h4>

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
                  <h4 className="ml-3 text-gray-700">About Company</h4>
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
                      <datalist id="companySuggestions">
                        {companySuggestions.map((suggestion, index) => (
                          <option key={index} value={suggestion} />
                        ))}
                      </datalist>
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
                  <h4 className="ml-3 text-gray-700">Title</h4>
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

              {/* image upload and tag */}
              <div className="flex h-full w-[50%] flex-col gap-3 p-2 md:w-full">
                <UserImage />
                <Inputtag tags={tags} setTags={setTags} />
              </div>
            </div>

            {/* submit button */}

            <div className="flex flex-col justify-center gap-3">
              <button
                type="Subm"
                disabled={isLoading}
                className="w-full bg-[#212121] p-2 text-lg font-medium text-white hover:border-[#212121] hover:bg-[#313131] hover:text-[#fff] focus:outline-none"
              >
                {isLoading ? "Processing..." : "Publish"}
              </button>
            </div>
          </form>
        </div>
        <div className="flex w-screen max-w-[100%] flex-col items-center justify-center gap-0 pb-5 md:h-[50%] md:w-[100%]">
          <div className="relative flex w-[70%] justify-start pb-7">
            <h1 className="ml-4 text-2xl font-[500] text-[#212121]">
              Write Here
            </h1>
          </div>
          <div className="relative flex w-[100%] justify-center text-[#212121]">
            <TextEditor article={article} setArticle={setArticle} />
          </div>
        </div>
      </div>
      <div className="pt-7">
        <Footer />
      </div>
    </>
  );
};

export default Create;
