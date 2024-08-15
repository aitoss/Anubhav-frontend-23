import React, {useEffect, useState} from "react";
import { GoChevronDown } from "react-icons/go";
import { MdKeyboardArrowUp } from "react-icons/md";

const Filter = ({ closeFilterPopUp, company, fetchArticles, setHeaderName }) => {
  const [show, setShow] = useState(false);
  const [currentCompany, setCurrentCompany] = useState("");
  const [sortBy, setSortBy] = useState("");

   company.sort((a, b) => b.count - a.count);

   const visibleCompany = show ? company : company.slice(0, 5);
    
   const handleShowMore = () =>{
    setShow(!show);
   }


  const handleClickApply = () => {
    closeFilterPopUp();
  };

  return (
    <>
      <div className="category1">
        <h5 className="font-[500] mb-2 text-xl">Filter by Company</h5>
        <div className="flex flex-col gap-1 max-h-[10rem] overflow-y-auto z-50">
          {company.map((item)=>{
            return(
              <div
              onClick={() => {
                setCurrentCompany(item.company)
                fetchArticles(item.company, 1)
                setHeaderName(item.company)
              }}
            className={`flex relative justify-between items-center px-2 py-1 rounded-md transition-all cursor-pointer  hover:bg-white ${currentCompany === item.company ? "bg-white" : ""}`}
          >
            <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded bg-[#12121240]"></div>
            <h5>{item.company}</h5>
            </div>
            <h5 className="bg-[#e7e8ec] w-6 flex justify-center items-center rounded-full font-[300]">
              {item.count}
            </h5>
          </div>
            )
          })}
          {/* {company.length > 5 && (
            <div className="flex flex-col items-center cursor-pointer" onClick={handleShowMore}>
              <p className="text-[#aaabaf]">{show ? "show less" : "show more"}</p>
              <p className="text-[#aaabaf]">{show ? <MdKeyboardArrowUp /> : <GoChevronDown />}</p>
              </div>
          )} */}
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#d9d9d9]"></div>
      <div className="category1">
        {/* sort by */}
        <h5 className="font-[500] mb-2 text-xl">Sort by</h5>
        <div className="flex flex-col gap-1 ">
          <div
            onClick={() => setSortBy("mostPopular")}
            className={`flex relative justify-between px-2 py-1 rounded-md hover:bg-white transition-all cursor-pointer ${sortBy === "mostPopular" ? "bg-white" : ""}`}
          >
            <h5>Most Popular</h5>
          </div>
          <div
            onClick={() => setSortBy("mostRecent")}
            className={`flex relative justify-between px-2 py-1 rounded-md hover:bg-white transition-all cursor-pointer ${sortBy === "mostRecent" ? "bg-white" : ""}`}
          >
            <h5>Most Recent</h5>
          </div>
          <div
            onClick={() => setSortBy("mostViewed")}
            className={`flex relative justify-between px-2 py-1 rounded-md hover:bg-white transition-all cursor-pointer ${sortBy === "mostViewed" ? "bg-white" : ""}`}
          >
            <h5>Most Viewed</h5>
          </div>
        </div>
      </div>
      <div className="w-full h-[0.5px] bg-[#d9d9d9]"></div>
      {/* apply */}
      <div className="flex justify-start">
        <div
          onClick={() => {
            handleClickApply();
          }}
          className="bg-[#fff] text-[#212121] border px-4 py-1 rounded-md hover:bg-[#f6f8fb] font-[400] cursor-pointer transition-all"
        >
          Apply
        </div>
      </div>
    </>
  );
};

export default Filter;
