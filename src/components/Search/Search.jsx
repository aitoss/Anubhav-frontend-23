import React, { useState, useEffect, useRef, useCallback } from "react";
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from '../../constants';

const Search = ({ mode, focus, full }) => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(full);
  const [searchText, setSearchText] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const inputRef = useRef(null);
  const [popularSearches, setPopularSearches] = useState([]);

  useEffect(() => {
    if (focus) {
      inputRef.current.focus();
    }
    const handleKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        inputRef.current.focus();
        setIsExpanded(true);
      }
    };

    const handleClickOutside = (event) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        !event.target.closest(".recent-searches")
      ) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchSubmit = () => {
    if (searchText.trim() !== "") {
      const updatedSearches = [...recentSearches, searchText];
      const limitedSearches = updatedSearches.slice(-10);
      setRecentSearches(limitedSearches);
      // setSearchText("");
      // focus out
      inputRef.current.value = searchText;
      inputRef.current.blur();
      navigate('/search?query=' + searchText);
    }
  };

  const directSearchFunction = (company) => {
    if (company.trim() !== "") {
      const updatedSearches = [...recentSearches, company];
      const limitedSearches = updatedSearches.slice(-10);
      setRecentSearches(limitedSearches);
      // setSearchText("");
      // focus out
      inputRef.current.value = company;
      inputRef.current.blur();
      navigate('/search?query=' + company);
    }
  };

  const handleClose = (event) => {
    if (event.key === "Enter") {
      setIsExpanded(false);
      handleSearchSubmit();
    } else if (
      // TODO: what is this for ?
      inputRef.current &&
      !inputRef.current.contains(event.target) &&
      !event.target.closest(".recent-searches")
    ) {
      setIsExpanded(false);
    }
  };

  const fetchSuggestions = useCallback(
    throttle(async (searchText) => {

      try {
        const response = await fetch(BACKEND_URL + `/similarBlogs?q=${searchText}`);
        const data = await response.json();
        const suggestionTitles = data.map(item => { return item.title })
        setPopularSearches(suggestionTitles);
      } catch (err) {
        console.log('Failed to fetch suggestions');
      }
    }, 1000), // Throttle the API call to once per second
    []
  );

  const debouncedFetchSuggestions = useCallback(
    debounce((searchText) => {
      fetchSuggestions(searchText);
    }, 300), // Debounce the input by 300ms
    [fetchSuggestions]
  );

  useEffect(() => {
    if (searchText.length > 2) {
      debouncedFetchSuggestions(searchText);
    } else {
      setPopularSearches(["Google STEP", "Microsoft SDE Intern"]);
    }
  }, [searchText, debouncedFetchSuggestions]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSuggestionClick = (company) => {
    directSearchFunction(company);
  };

  const handleRemove = (index) => {
    setRecentSearches(recentSearches.filter((_, i) => i !== index));
  };

  const containerClass = mode === "dark" ? "bg-[#212121] text-[#ffffffcc]" : "bg-[#fff] text-[#212121]";
  const borderClass = mode === "dark" ? "border-[#414141]" : "border-[#d9d9d9]";
  const inputBgClass = mode === "dark" ? "bg-[#212121]" : "bg-[#fff]";
  const inputTextClass = mode === "dark" ? "text-[#ffffffcc]" : "text-[#212121]";
  const placeholderClass = mode === "dark" ? "placeholder:text-[rgba(255,255,255,0.6)]" : "placeholder:text-[#818181]";
  const hoverClass = mode === "dark" ? "hover:bg-[#313131]" : "hover:bg-[#f8f8f8]";
  const popularSearchClass = mode === "dark" ? "bg-[#212121] text-[#ffffffbb]" : "bg-[#fff] text-[#212121]";

  return (
    <>
      <div className="flex flex-col relative">
        <div className={`search flex px-[4px] py-[1px] border-[1.5px] ${containerClass} ${borderClass} justify-center items-center gap-1 rounded-lg shadow-md shadow-[rgba(0,0,0,0.05)]`}>
          <div
            onClick={handleSearchSubmit}
            className={`h-[32px] w-[32px] border-[1.5px] ${borderClass} rounded-lg p-1 cursor-pointer flex justify-center items-center`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8333 28.6509C22.8289 28.6509 28.5 22.9798 28.5 15.9842C28.5 8.9886 22.8289 3.31754 15.8333 3.31754C8.83769 3.31754 3.16663 8.9886 3.16663 15.9842C3.16663 22.9798 8.83769 28.6509 15.8333 28.6509Z"
                stroke="#b9b9b9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M29.8333 29.9842L27.1666 27.3175"
                stroke="#b9b9b9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <input
            ref={inputRef}
            className={`${inputBgClass} ${inputTextClass} px-3 h-[2.5rem] w-[400px] x-sm:w-[300px] lg:w-[500px] border-none outline-none focus:outline-none placeholder:text-[rgba(255,255,255,0.6)] placeholder:font-[300] font-[300] placeholder:focus:outline-none placeholder:focus:border-none placeholder:focus:text-[rgba(255,255,255,0.8)] ${placeholderClass}`}
            type=''
            placeholder="Search for your Dreams.."
            value={searchText}
            onKeyDown={handleClose}
            onChange={handleChange}
            onClick={() => setIsExpanded(true)}
          />
          <div className={`border-[1.5px] ${borderClass} text-[#b9b9b9] p-1 h-[32px] w-[32px] flex justify-center items-center rounded-md font-[400] `}>
            ⌘K
          </div>
        </div>
        {isExpanded && (
          <div className={`z-50 overflow-hidden absolute top-[42.5px] flex flex-col font-[300] text-sm ${popularSearchClass} w-full recent-searches border-[1.5px] ${borderClass} justify-start items-center rounded-lg shadow-md shadow-[rgba(0,0,0,0.05)]`}>
            <div className="flex flex-col w-full justify-center items-center">
              <div className="overflow-hidden px-2 pt-2 pb-1 w-full font-[400] tracking-wider">
                Popular Searches
              </div>
              <div className={`w-full h-[1px] ${hoverClass}`}></div>
              {popularSearches.map((company, index) => (
                <div className={`px-2 py-2 flex flex-row w-full justify-between items-center ${hoverClass}`} key={index}>
                  <div className="pl-2 w-[400px] cursor-pointer" onClick={() => handleSuggestionClick(company)}>
                    {company}
                  </div>
                </div>
              ))}
            </div>
            {recentSearches.length === 0 ? (
              <div className="px-2 py-2 flex flex-row w-full justify-center items-center">
                No recent searches
              </div>
            ) : (
              <>
                <div className="overflow-hidden px-4 pt-2 pb-1 w-full font-[400] tracking-wider">
                  Recent Searches
                </div>
                <div className={`w-[480px] h-[1px] ${hoverClass}`}></div>
                {recentSearches
                  .slice(0)
                  .reverse()
                  .map((search, index) => (
                    <div className={`px-4 py-2 flex flex-row w-full justify-between items-center ${hoverClass}`} key={index}>

                      <div className="flex justify-center items-center gap-2 cursor-pointer" onClick={() => handleSuggestionClick(search)}>
                        <svg
                          className="w-[20px]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#9a9a9a"
                        >
                          <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12H4C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C9.25022 4 6.82447 5.38734 5.38451 7.50024L8 7.5V9.5H2V3.5H4L3.99989 5.99918C5.82434 3.57075 8.72873 2 12 2ZM13 7L12.9998 11.585L16.2426 14.8284L14.8284 16.2426L10.9998 12.413L11 7H13Z"></path>
                        </svg>
                        <div className=" w-[400px]">{search}</div>
                      </div>
                      <span
                        className="hover:underline hover:cursor-pointer"
                        onClick={() => handleRemove(recentSearches.length - index - 1)}
                      >
                        Remove
                      </span>
                    </div>
                  ))}
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
