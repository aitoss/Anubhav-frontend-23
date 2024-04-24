import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Inputtag from "../components/InputTag/Usertag";
import TextEditor from "../components/Editor/TextEditor";
import { FiUploadCloud } from "react-icons/fi";
import DragDropFiles from "../components/Editor/Drag";
import background2 from "../assets/dots-pattern.svg"
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
  const [bannerImage , setbannerImage] = useState(null);
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [article, setArticle] = useState("");
  const [value, setValue] = useState({
    name: "",
    email: "",
    company: "",
    position: "",
  });

  const addError = (message) => {
    setError(message);
    setTimeout(() => {
      setError(null);
    }, 3000);
  };

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }

  const UploadFile = () => {
    const file = inputRef.current.files[0];
    setFile(URL.createObjectURL(file));
    setbannerImage(file)
    console.log(file)
  }

  const publishPost = async () => {
    if (article === "") {
      addError('Article cannot be empty');
      return;
    }

    console.log(bannerImage)

    if (!file) {
      addError('Please upload a banner image');
      return;
    }
    setIsLoading(true);
    try {
      // TODO: implement after view blogs is complete
      const response = await axios.post(BACKEND_URL+'/blogs', {
        title: "latest tets here", // TODO: add new field article title
        authorName: value.name,
        authorEmailId: value.email,
        companyName: value.company,
        role: value.position,
        articleTags: tags, // TODO: Tags are not being added
        article: article,
      });
      setIsLoading(false);
      const id = response.data.createArticle._id;
      console.log('Post published:', response.data);
      navigate('/blog/'+id);
    }
    catch (error) {
      console.error('Error publishing post:', error);
      setIsLoading(false);
    }
  };
  


  const [companySuggestions, setCompanySuggestions] = useState([]);

  useEffect(() => {

    const fetchCompanySuggestions = async () => {
      try {
        const response = await axios.get(BACKEND_URL + '/companies');
        setCompanySuggestions(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching company suggestions:', error);
      }
    };

    fetchCompanySuggestions();
  }, []);


  const UserImage = () => {
    return (
      <>
        < ErrorMessage error={error} />

        <h3 className="text-[#212121] flex justify-start ml-3">Banner Image</h3>
        <div className="flex flex-col p-4 justify-center w-full h-[80%] gap-2 rounded-xl items-center border-dashed border-[2px] border-[rgba(0, 0, 0, 0.15)] md:w-full">

          <div className="w-full flex justify-center ">
            <div
              className="w-[106px] h-[106px]  flex justify-center rounded-full sm:w-24 sm:h-24"

            >
              {file ? (
                <img
                  src={file}
                  alt=""
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <img
                  className="cursor-pointer"
                  src={Upload} onClick={(e) => {
                    inputRef.current.click();
                    e.preventDefault();
                  }} />
              )}
            </div>
          </div>
          <p className="text-gray-300">
            {file ? null : (
              <h1 className="text-[#C3C3C3] text-xs font-[300]">JPG, JPEG, PNG file size no more than 10MB</h1>
            )}
          </p>
          {file && <button className=" relative p-[10px] py-0 bottom-2 border-transparent" onClick={() => setFile(null)}>Cancle</button>}
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
        className="flex flex-col gap-3 items-center mx-auto pt-16"
        style={{ backgroundImage: `url(${background2})` }}
      >
        {/* basic info */}
        <div className=" relative w-[100%] max-w-[100%] flex  justify-center  md:h-[70%] md:w-[90%] py-7">
          <form
            onSubmit={(e) => { e.preventDefault(); publishPost(); }}
            className="relative w-[70%] rounded-xl border-[1px]  bg-white p-7 pb-4 flex flex-col gap-3  shadow-lg shadow-[rgba(0,0,0,0.03)] md:gap-1  md:w-full md:p-5">
            <div className="w-full">
              <h2 className="text-[#212121] font-[500] text-2xl ml-2">
                Basic Information
              </h2>
            </div>

            <div className="flex gap-4 md:flex-col">
              <div className="flex flex-col gap-3 p-2 w-[50%] md:w-full md:gap-2">

                <div className="flex flex-col gap-3 md:gap-1">
                  <h4 className="text-gray-700 ml-3">About You</h4>

                  <div className="flex flex-col gap-2">

                    <div className="relative flex flex-col gap-2">
                      <input required
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        value={value.name}
                        onChange={handleChange}
                        className="w-full rounded-lg text-md bg-white border-[1px] shadow-sm shadow-[#00000020] ring ring-transparent border-[#78788033] p-3 text-[#3C3C43]  placeholder:text-[#3C3C4399] focus:outline-none focus:placeholder:text-[#3c3c4350] md:w-full sm:p-2 sm:text-[13px]" />
                    </div>

                    <div className="relative flex flex-col gap-2">
                      <input required
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={value.email}
                        onChange={handleChange}
                        className="w-full rounded-lg text-md bg-white border-[1px] shadow-sm shadow-[#00000020] ring ring-transparent border-[#78788033] p-3 text-[#3C3C43]  placeholder:text-[#3C3C4399] focus:outline-none focus:placeholder:text-[#3c3c4350] md:w-full sm:p-2 sm:text-[13px]" />
                    </div>

                  </div>

                </div>

                <div className="flex flex-col gap-3 md:gap-1">
                  <h4 className="ml-3 text-gray-700">About Company</h4>
                  <div className="flex flex-col gap-2">

                    <div className="relative flex flex-col gap-2">
                      <input required
                        type="text"
                        name="company"
                        id="name"
                        list="companySuggestions"
                        placeholder="Company's name"
                        value={value.company}
                        onChange={handleChange}
                        className="w-full rounded-lg text-md bg-white border-[1px] shadow-sm shadow-[#00000020] ring ring-transparent border-[#78788033] p-3 text-[#3C3C43]  placeholder:text-[#3C3C4399] focus:outline-none focus:placeholder:text-[#3c3c4350] md:w-full sm:p-2 sm:text-[13px]" />
                      <datalist id="companySuggestions">
                        {companySuggestions.map((suggestion, index) => (
                          <option key={index} value={suggestion} />
                        ))}
                      </datalist>
                    </div>

                    <div className="relative flex flex-col gap-2">
                      <select required
                        name="position"
                        id="position"
                        value={value.position}
                        onChange={handleChange}
                        className="w-full rounded-lg text-md bg-white border-[1px] shadow-sm shadow-[#00000020] ring ring-transparent border-[#78788033] p-3 text-[#3C3C43]  placeholder:text-[#3C3C4399] focus:outline-none focus:placeholder:text-[#3c3c4350] md:w-full sm:p-2 sm:text-[13px]"
                      >
                        <option value="">Select Position</option>
                        <option value="Internship">Internship</option>
                        <option value="FullTime">Full Time</option>
                        <option value="Interview-experience">Interview Experience</option>
                      </select>
                    </div>

                  </div>
                </div>
              </div>

              {/* image upload and tag */}
              <div className="flex flex-col gap-3 p-2 w-[50%] h-full md:w-full">
                <UserImage />
                <Inputtag tags={tags} setTags={setTags} />
              </div>
            </div>

            {/* submit button */}

            <div className="flex flex-col justify-center gap-3">
              <button type="Subm" disabled={isLoading} className="bg-[#212121] text-white text-lg font-medium w-full p-2 focus:outline-none hover:bg-[#313131] hover:text-[#fff] hover:border-[#212121]">
                {isLoading ? 'Processing...' : 'Publish'}
              </button>
            </div>
          </form>
        </div>
        {/* Cover image */}
        {/* <div className="w-full max-w-[100%] flex flex-col justify-center items-center md:h-[30%] md:w-[100%]">
          <div className="w-[70%] flex justify-start">
            <h1 className="text-[#212121] font-[500] text-2xl ml-4 pb-4">
              Cover Image
            </h1>
          </div>
          <DragDropFiles />
        </div> */}
        {/* Write here (Editor) */}
        <div className="w-screen max-w-[100%] items-center flex flex-col justify-center gap-0 pb-5 md:h-[50%] md:w-[100%]">
          <div className="relative w-[70%] flex justify-start pb-7">
            <h1 className="text-[#212121] font-[500] text-2xl ml-4">Write Here</h1>
          </div>
          <div className="relative w-[100%] text-[#212121] flex justify-center">
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
