import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from '../../constants';
import { X } from 'lucide-react';

const Search = ({ mode, focus, full }) => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(full);
  const [searchText, setSearchText] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const inputRef = useRef(null);
  const [popularSearches, setPopularSearches] = useState(["Google", "Microsoft"]);

  useEffect(() => {
    const storedSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
    setRecentSearches(storedSearches);
  }, []);

  useEffect(() => {
    if (focus) inputRef.current.focus();
  }, [focus]);

  useEffect(() => {
    const handleGlobalKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        inputRef.current.focus();
        setIsExpanded(true);
      }
    };

    const handleClickOutside = (event) => {
      if (!inputRef.current.contains(event.target)) setIsExpanded(false);
    };

    document.addEventListener("keydown", handleGlobalKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleGlobalKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchSubmit = useCallback(() => {
    if (searchText.trim()) {
      const updatedSearches = [...recentSearches, searchText].slice(-10);
      setRecentSearches(updatedSearches);
      localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
      navigate(`/search?query=${searchText}`);
      inputRef.current.blur();
    }
  }, [searchText, recentSearches, navigate]);

  const fetchSuggestions = useCallback(
    throttle(async (text) => {
      try {
        const response = await fetch(`${BACKEND_URL}/similarBlogs?q=${text}`);
        const data = await response.json();
        setPopularSearches(data.map(item => item.title));
      } catch (err) {
        console.log('Failed to fetch suggestions', err);
      }
    }, 1000),
    []
  );

  const debouncedFetchSuggestions = useMemo(
    () => debounce((text) => fetchSuggestions(text), 300),
    [fetchSuggestions]
  );

  useEffect(() => {
    if (searchText.length > 2) {
      debouncedFetchSuggestions(searchText);
    } else {
      setPopularSearches(["Google", "Microsoft"]);
    }
  }, [searchText, debouncedFetchSuggestions]);

  const handleInputChange = (e) => setSearchText(e.target.value);

  const handleSuggestionClick = (query) => {
    setSearchText(query);
    handleSearchSubmit();
  };

  const handleRemoveRecentSearch = (index) => {
    const updatedSearches = recentSearches.filter((_, i) => i !== index);
    setRecentSearches(updatedSearches);
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
  };

  const containerClass = mode === "dark" ? "bg-[#212121] text-[#ffffffcc]" : "bg-[#fff] text-[#212121]";
  const borderClass = mode === "dark" ? "border-[#414141]" : "border-[#d9d9d9]";
  const inputClasses = `${mode === "dark" ? "bg-[#212121] text-[#ffffffcc]" : "bg-[#fff] text-[#212121]"} px-3 h-[2.5rem] w-[400px] border-none outline-none`;

  return (
    <div className="flex flex-col relative">
      <div className={`search flex px-[4px] py-[1px] border-[1.5px] ${containerClass} ${borderClass} justify-center items-center gap-1 rounded-lg shadow-md`}>
        <div onClick={handleSearchSubmit} className={`h-[32px] w-[32px] border-[1.5px] ${borderClass} rounded-lg p-1 cursor-pointer flex justify-center items-center`}>
          {/* Search Icon */}
        </div>
        <form onSubmit={(e) => { e.preventDefault(); handleSearchSubmit(); }}>
          <input
            ref={inputRef}
            className={inputClasses}
            placeholder="Search for your Dreams.."
            value={searchText}
            onChange={handleInputChange}
            onClick={() => setIsExpanded(true)}
          />
        </form>
        <div className={`border-[1.5px] ${borderClass} text-[#b9b9b9] p-1 h-[32px] w-[32px] flex justify-center items-center rounded-md`}>
          ⌘K
        </div>
      </div>

      {isExpanded && (
        <div className={`z-50 absolute top-[42.5px] flex flex-col ${containerClass} w-full border-[1.5px] ${borderClass} rounded-lg shadow-md`}>
          {/* Popular Searches */}
          <div className="px-2 pt-2 pb-1 font-[400]">Popular Searches</div>
          {popularSearches.map((item, index) => (
            <div key={index} className="px-2 py-2 cursor-pointer" onClick={() => handleSuggestionClick(item)}>
              {item}
            </div>
          ))}
          {/* Recent Searches */}
          {recentSearches.length > 0 && (
            <>
              <div className="px-4 pt-2 pb-1 font-[400]">Recent Searches</div>
              {recentSearches.map((search, index) => (
                <div key={index} className="px-4 py-2 flex justify-between items-center">
                  <div className="cursor-pointer" onClick={() => handleSuggestionClick(search)}>{search}</div>
                  <span onClick={() => handleRemoveRecentSearch(index)}><X size={16} /></span>
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
