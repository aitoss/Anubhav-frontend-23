import React, { useMemo, useEffect, useRef } from "react";
import { Camera } from "lucide-react";
import Author from "../BlogSection/_Child/Author";
import Tag from "../InputTag/Tag";
import MinuteReadLikes from "../MinuteReadLikes/MinuteReadLikes";
import { formatDate, ReadTime } from "../../services/date";
import ReactQuill from "react-quill";

const PreviewPage = ({ value, article, bannerImage, tags }) => {
  const MemoizedAuthor = useMemo(() => {
    return (
      <Author
        person={{
          name: value.name,
          company: value.company,
        }}
      />
    );
  }, [value.name, value.company]);

  const currentTimestamp = new Date().toISOString();

  const readingTime = useMemo(() => {
    const textContent = article.replace(/<[^>]+>/g, "");
    return ReadTime(textContent);
  }, [article]);

  const MemoizedMinuteReadLikes = useMemo(() => {
    return (
      <MinuteReadLikes
        readingTime={readingTime}
        timeStamp={formatDate(currentTimestamp)}
      />
    );
  }, [readingTime, currentTimestamp]);

  // Ref to handle scroll locking
  const scrollContainerRef = useRef(null);

  // Prevent body from scrolling when mouse is over scrollable div
  useEffect(() => {
    const handleScrollLock = (e) => {
      const scrollContainer = scrollContainerRef.current;
      if (scrollContainer && scrollContainer.contains(e.target)) {
        e.stopPropagation();
      }
    };

    document.addEventListener("wheel", handleScrollLock, { passive: true });
    return () => {
      document.removeEventListener("wheel", handleScrollLock);
    };
  }, []);

  return (
    <div className="w-full max-w-[70%] md:max-w-[90%] pt-8">
      <h1 className="ml-0 x-sm:ml-0 text-left text-2xl font-[500] text-[#212121] md:ml-5">
        Preview Your Article
      </h1>
      <div className="laptop-mockup md:rounded-xl rounded-t-xl bg-[#121212] border-2 x-sm:p-2 p-3">
        <div
          className="laptop-screen flex flex-col gap-2 overflow-y-auto bg-white p-2 lg:px-32 px-12 md:px-4"
          style={{ height: "60vh" }}
          ref={scrollContainerRef} // Attach the ref here
        >
          <h1 className="text-3xl font-bold">{value.title}</h1>
          {MemoizedAuthor}
          <div className="pointer-events-auto flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Tag key={index} name={tag} />
            ))}
          </div>
          <div className="pointer-events-auto">{MemoizedMinuteReadLikes}</div>
          {bannerImage ? (
            <img
              src={bannerImage}
              alt="Banner"
              className="mb-4 h-40 w-full rounded-lg object-cover"
            />
          ) : (
            <div className="mb-4 flex h-40 w-full items-center justify-center rounded-lg bg-gray-300">
              <Camera size={48} className="text-gray-400" />
            </div>
          )}
          <div className="lorem-container flex flex-col items-center justify-center py-3 text-black">
            <div className="w-full rounded-lg bg-white text-[18px] shadow-none">
              <ReactQuill
                value={article}
                theme="bubble"
                readOnly
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="laptop-base h-2 md:hidden -mt-1 border-x-2 bg-[#212121]"></div>
      <div className="laptop-base h-4 md:hidden -mx-8 border rounded-b-xl bg-[#121212]"></div>
    </div>
  );
};

export default PreviewPage;
