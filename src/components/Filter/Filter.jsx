import React from "react";

const Filter = ({ closeFilterPopUp }) => {
  const [placement, setplacement] = React.useState(true);
  const [intern, setintern] = React.useState(false);
  const [videos, setvideos] = React.useState(false);
  const [MostRecent, setMostRecent] = React.useState(false);
  const [MostPopular, setMostPopular] = React.useState(true);
  const [MostViewed, setMostViewed] = React.useState(false);

  const handlePlacement = () => {
    setplacement(!placement);
    setintern(false);
    setvideos(false);
  };

  const handleIntern = () => {
    setintern(!intern);
    setplacement(false);
    setvideos(false);
  };

  const handleVideos = () => {
    setvideos(!videos);
    setplacement(false);
    setintern(false);
  };

  const handleRecent = () => {
    setMostRecent(!MostRecent);
    setMostPopular(false);
    setMostViewed(false);
  };

  const handlePopular = () => {
    setMostPopular(!MostPopular);
    setMostRecent(false);
    setMostViewed(false);
  };

  const handleViewed = () => {
    setMostViewed(!MostViewed);
    setMostRecent(false);
    setMostPopular(false);
  };

  const handleClickApply = () => {
    closeFilterPopUp();
  };

  return (
    <>
      <div className="category1">
        <h5 className="font-[500]">Filter by</h5>
        <div className="flex flex-col gap-1 ">
          <div
            onClick={() => handlePlacement()}
            className={`flex relative justify-between px-2 py-1 rounded-md hover:bg-[#f6f8fb] transition-all cursor-pointer ${placement ? "bg-[#f6f8fb]" : ""}`}
          >
            {placement && (
              <div className="absolute w-1 h-4 bg-[#e7e8ec] rounded-full top-2 -left-2"></div>
            )}
            <h5>Placement</h5>
            <h5 className="bg-[#e7e8ec] w-6 flex justify-center items-center rounded-full font-[300]">
              12
            </h5>
          </div>
          <div
            onClick={() => handleIntern()}
            className={`flex relative justify-between px-2 py-1 rounded-md hover:bg-[#f6f8fb] transition-all cursor-pointer  ${intern ? "bg-[#f6f8fb]" : ""}`}
          >
            {intern && (
              <div className="absolute w-1 h-4 bg-[#e7e8ec] rounded-full top-2 -left-2"></div>
            )}
            <h5>Intern</h5>
            <h5 className="bg-[#e7e8ec] w-6 flex justify-center items-center rounded-full font-[300]">
              6
            </h5>
          </div>
          <div
            onClick={() => handleVideos()}
            className={`flex relative justify-between px-2 py-1 rounded-md hover:bg-[#f6f8fb] transition-all cursor-pointer  ${videos ? "bg-[#f6f8fb]" : ""}`}
          >
            {videos && (
              <div className="absolute w-1 h-4 bg-[#e7e8ec] rounded-full top-2 -left-2"></div>
            )}
            <h5>Videos</h5>
            <h5 className="bg-[#e7e8ec] w-6 flex justify-center items-center rounded-full font-[300]">
              3
            </h5>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#d9d9d9]"></div>
      <div className="category2">
        {/* sort by */}
        <h5 className="font-[500]">Sort by</h5>
        <div className="flex flex-col gap-1 ">
          <div
            onClick={() => handlePopular()}
            className={`flex relative justify-between px-2 py-1 rounded-md hover:bg-[#f6f8fb] transition-all cursor-pointer ${MostPopular ? "bg-[#f6f8fb]" : ""}`}
          >
            {MostPopular && (
              <div className="absolute w-1 h-4 bg-[#e7e8ec] rounded-full top-2 -left-2"></div>
            )}
            <h5>Most Popular</h5>
          </div>
          <div
            onClick={() => handleRecent()}
            className={`flex relative justify-between px-2 py-1 rounded-md hover:bg-[#f6f8fb] transition-all cursor-pointer ${MostRecent ? "bg-[#f6f8fb]" : ""}`}
          >
            {MostRecent && (
              <div className="absolute w-1 h-4 bg-[#e7e8ec] rounded-full top-2 -left-2"></div>
            )}
            <h5>Most Recent</h5>
          </div>
          <div
            onClick={() => handleViewed()}
            className={`flex relative justify-between px-2 py-1 rounded-md hover:bg-[#f6f8fb] transition-all cursor-pointer ${MostViewed ? "bg-[#f6f8fb]" : ""}`}
          >
            {MostViewed && (
              <div className="absolute w-1 h-4 bg-[#e7e8ec] rounded-full top-2 -left-2"></div>
            )}
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
