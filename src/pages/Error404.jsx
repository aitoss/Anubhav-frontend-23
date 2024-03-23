import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import error from "../assets/error.svg";

export default function Error404() {
    return (
      <>
        <Navbar />
        <section className="w-[100%] h-[90vh] mx-auto flex flex-col  place-items-center md:justify-center">
             <img src={error} alt="" />
             <div className="flex flex-col justify-center place-items-center gap-2 md:bottom-20">
              <h1 className="text-black md:text-[25px]">Page not found</h1>
              <p className="text-black text-center md:text-[15px]">Oops! Looks like you followed a bad link. If you think is a problem with us, please tell us</p>
              <Link to="/" className="bg-black text-white p-1 px-2 rounded-[20px] hover:border-[#212121] hover:bg-[#313131] hover:text-[#fff]">Go back to Home</Link>
             </div>
        </section>
      </>
    )
  }