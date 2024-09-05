import React, { useEffect, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { MdKeyboardArrowUp } from "react-icons/md";
import companyLogo from "../../assets/images/company.png";

const Filter = ({ closeFilterPopUp, company, fetchArticles, setHeaderName }) => {
  const [show, setShow] = useState(false);
  const [currentCompany, setCurrentCompany] = useState("");
  const [sortBy, setSortBy] = useState("");

  company.sort((a, b) => b.count - a.count);

  const handleClickApply = () => {
    closeFilterPopUp();
  };

  const stopScrollPropagation = (e) => {
    e.stopPropagation(); 
  };

  return (
    <>
      <div className="category1">
        <h5 className="font-[500] mb-2 text-xl">Filter by Company</h5>
        <div
          className="flex relative flex-col gap-1 max-h-[10rem] overflow-y-scroll z-50"
          onWheel={(e) => stopScrollPropagation(e)} // Prevent page scroll
        >
          {company.map((item) => {
            return (
              <div
                key={item.company}
                onClick={() => {
                  setCurrentCompany(item.company);
                  fetchArticles(item.company, 1);
                  setHeaderName(item.company);
                }}
                className={`relative flex cursor-pointer items-center justify-between rounded-md px-2 py-1 transition-all hover:bg-white ${
                  currentCompany === item.company ? "bg-white" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="h-5 w-5 rounded bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${item.domainName ? item.domainName: companyLogo})` }}
                  ></div>
                  <h5>{item.company}</h5>
                </div>
                <h5 className="flex w-6 items-center justify-center rounded-full bg-[#e7e8ec] font-[300]">
                  {item.count}
                </h5>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#d9d9d9]"></div>
      <div className="category1">
        <h5 className="font-[500] mb-2 text-xl">Sort by</h5>
        <div className="flex flex-col gap-1 ">
          <div
            onClick={() => setSortBy("mostPopular")}
            className={`flex relative justify-between px-2 py-1 rounded-md hover:bg-white transition-all cursor-pointer ${
              sortBy === "mostPopular" ? "bg-white" : ""
            }`}
          >
            <h5>Most Popular</h5>
          </div>
          <div
            onClick={() => setSortBy("mostRecent")}
            className={`flex relative justify-between px-2 py-1 rounded-md hover:bg-white transition-all cursor-pointer ${
              sortBy === "mostRecent" ? "bg-white" : ""
            }`}
          >
            <h5>Most Recent</h5>
          </div>
          <div
            onClick={() => setSortBy("mostViewed")}
            className={`flex relative justify-between px-2 py-1 rounded-md hover:bg-white transition-all cursor-pointer ${
              sortBy === "mostViewed" ? "bg-white" : ""
            }`}
          >
            <h5>Most Viewed</h5>
          </div>
        </div>
      </div>
      <div className="w-full h-[0.5px] bg-[#d9d9d9]"></div>
      <div className="flex justify-start">
        <div
          onClick={handleClickApply}
          className="bg-[#fff] text-[#212121] border px-4 py-1 rounded-md hover:bg-[#f6f8fb] font-[400] cursor-pointer transition-all"
        >
          Apply
        </div>
      </div>
    </>
  );
};

export default Filter;
