import React from "react";
import { Link } from "react-router-dom";
import Anubhav from "../../assets/images/Anubhav-3d.png";
import "./Footer.css";
import Social from "./Social";
import { SparklesCore } from "./Sparkles";

const Footer = () => {

  const Glow = () => {
    return (
      <>
        <svg width="1328" height="295" viewBox="0 0 1328 295" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_816_14847)">
            <g opacity="0.2" filter="url(#filter0_f_816_14847)">
              <path d="M1023.78 -631.5L1043.93 -611.347L690.376 -257.794L443.723 -23L670.223 -277.947L1023.78 -631.5Z" fill="url(#paint0_linear_816_14847)" />
            </g>
            <g opacity="0.32" filter="url(#filter1_f_816_14847)">
              <path d="M855.777 -623L875.929 -602.847L522.376 -249.294L275.723 -14.5L502.223 -269.447L855.777 -623Z" fill="url(#paint1_linear_816_14847)" />
            </g>
            <g opacity="0.2" filter="url(#filter2_f_816_14847)">
              <path d="M-358.348 757.929L-378.5 737.777L-24.9467 384.223L221.706 149.429L-4.79415 404.376L-358.348 757.929Z" fill="url(#paint2_linear_816_14847)" />
            </g>
            <g opacity="0.5" filter="url(#filter3_f_816_14847)">
              <path d="M-190.348 749.429L-210.5 729.277L143.053 375.723L389.706 140.929L163.206 395.876L-190.348 749.429Z" fill="url(#paint3_linear_816_14847)" />
            </g>
            <g opacity="0.32" filter="url(#filter4_f_816_14847)">
              <path d="M-125.848 835.929L-146 815.777L207.553 462.223L454.206 227.429L227.706 482.376L-125.848 835.929Z" fill="url(#paint4_linear_816_14847)" />
            </g>
          </g>
          <defs>
            <filter id="filter0_f_816_14847" x="383.723" y="-691.5" width="720.206" height="728.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              {/* <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_816_14847" /> */}
            </filter>
            <filter id="filter1_f_816_14847" x="215.723" y="-683" width="720.206" height="728.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              {/* <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_816_14847" /> */}
            </filter>
            <filter id="filter2_f_816_14847" x="-438.5" y="89.4292" width="720.206" height="728.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              {/* <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_816_14847" /> */}
            </filter>
            <filter id="filter3_f_816_14847" x="-270.5" y="80.9292" width="720.206" height="728.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              {/* <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_816_14847" /> */}
            </filter>
            <filter id="filter4_f_816_14847" x="-206" y="167.429" width="720.206" height="728.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              {/* <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_816_14847" /> */}
            </filter>
            <linearGradient id="paint0_linear_816_14847" x1="1033.85" y1="-621.424" x2="680.3" y2="-267.87" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" />
              <stop offset="1" stop-color="#D3D8DF" />
            </linearGradient>
            <linearGradient id="paint1_linear_816_14847" x1="865.853" y1="-612.924" x2="512.3" y2="-259.37" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" />
              <stop offset="1" stop-color="#D3D8DF" />
            </linearGradient>
            <linearGradient id="paint2_linear_816_14847" x1="-368.424" y1="747.853" x2="-14.8704" y2="394.3" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" />
              <stop offset="1" stop-color="#D3D8DF" />
            </linearGradient>
            <linearGradient id="paint3_linear_816_14847" x1="-200.424" y1="739.353" x2="153.13" y2="385.8" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" />
              <stop offset="1" stop-color="#D3D8DF" />
            </linearGradient>
            <linearGradient id="paint4_linear_816_14847" x1="-135.924" y1="825.853" x2="217.63" y2="472.3" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" />
              <stop offset="1" stop-color="#D3D8DF" />
            </linearGradient>
            <clipPath id="clip0_816_14847">
              <rect width="1448" height="450" fill="white" transform="translate(0 -155)" />
            </clipPath>
          </defs>
        </svg>

      </>
    )
  }

  return (
    <>
      <div className="bg-[#121212] flex justify-center items-center w-full px-3 ">
        <div className="w-full bottom-0  space-y-6 mt-1 p-3 text-center lg:text-left text-[#D9D9D9] max-w-[1540px]">
          <div className="relative main-footer x-sm:px-0  px-1 lg:px-20 text-left lg:flex-row justify-between lg:justify-between flex sm:flex-row x-sm:flex-col x-sm:justify-center x-sm:items-center x-sm:gap-6 items-start text-[#D9D9D9] ">
            <div className="absolute w-1/2 md:w-[90%] blur-[30px] overflow-hidden -bottom-[25px] left-[10%] pointer-events-none">
              <Glow />
            </div>
            <div className="absolute left-0 w-full h-full top-0 pointer-events-none">
              <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={8}
                className="w-full h-5/6"
                particleColor="#d9d9d9"
              />
            </div>
            <div className="flex flex-row md:flex-col justify-center items-center">
              <img
                className="w-[278px] h-[246px] md:h-[150px] overflow-visible md:object-cover"
                draggable="false"
                src={Anubhav}
                alt=""
                srcSet=""
              />
              <div className="flex flex-col items-start md:justify-center md:items-center">
                <div className="text-transparent bg-clip-text bg-gradient-to-t from-[#A0A0A0] to-[#f0f0f0] font-[500] text-7xl">
                  Anubhav
                </div>
                <div className="pb-3 text-transparent leading-[24px] bg-clip-text bg-gradient-to-t from-[#A0A0A0] to-[#f0f0f0] text-2xl">
                  Stories of Success
                </div>
                <Social />
              </div>
            </div>
            <div className="flex lg:flex-row flex-col my-auto gap-[5px] lg:gap-[90px]">
              <div className="flex flex-col">
                <div className="text-[#f0f0f0] font-[400] tracking-wide text-[20px]">
                  Quick links
                </div>

                <Link
                  to="/create"
                  className="text-[#a0a0a0] font-[300] tracking-wide text-[16px] underline-none pl-1 hover:text-[#f0f0f0] hover:underline"
                >
                  Write article
                </Link>

                <Link
                  to="/request"
                  className="text-[#a0a0a0] font-[300] tracking-wide text-[16px] underline-none pl-1 hover:text-[#f0f0f0] hover:underline"
                >
                  Request article
                </Link>

                <Link
                  to="/videos"
                  className="text-[#a0a0a0] font-[300] tracking-wide text-[16px] underline-none pl-1 hover:text-[#f0f0f0] hover:underline"
                >
                  Videos
                </Link>
                <Link
                  to="/story"
                  className="text-[#a0a0a0] font-[300] tracking-wide text-[16px] underline-none pl-1 hover:text-[#f0f0f0] hover:underline"
                >
                  Our story
                </Link>
                <Link
                  to="/team"
                  className="text-[#a0a0a0] font-[300] tracking-wide text-[16px] underline-none pl-1 hover:text-[#f0f0f0] hover:underline"
                >
                  Dev team
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#515151] rounded-full"></div>
          <div className="flex justify-center text-[#d9dd9d9cc] sm:text-start ">
            Made with <span className="text-transparent leading-[24px] bg-clip-text bg-gradient-to-t from-[#717171] to-[#d9d9d9]">&nbsp;Love&nbsp;</span> and <span className="text-transparent leading-[24px] bg-clip-text bg-gradient-to-t from-[#717171] to-[#d9d9d9]">&nbsp;Anubhav&nbsp;</span> by OSS Club
          </div>
          <div className="flex flex-row sm:flex-col justify-center items-center gap-4 sm:gap-1 text-[#6b6b6b]">
            <div className="flex justify-center text-[#d9dd9d9cc] sm:text-start ">
              ©2024 O<span className="x-sm:hidden block">pen&nbsp;</span>S<span className="x-sm:hidden block">ource&nbsp;</span>S<span className="x-sm:hidden block">oftware&nbsp;</span> Club All rights reserved
            </div>

            <Link
              to="/terms"
              className="hover:text-[#a0a0a0] font-[400] transition-all"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
