import React, { useState, useEffect, useRef } from 'react'
import SearchModal from './SearchModal';

const Search = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);
  let inputRef = useRef(null);


  const popularSearches = [
    "Amazon",
    "Google",
    "Facebook",
    "Microsoft",
  ]

  useEffect(() => {
    inputRef.current.focus();
    const handleKeyDown = (event) => {
      // Check if Cmd key is pressed on Mac or Ctrl key on other platforms
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        // Focus on the input field when the shortcut is activated
        inputRef.current.focus();
        setIsExpanded(true);
      }
    };

    const handleClickOutside = (event) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        !event.target.closest('.recent-searches')
      ) {
        setIsExpanded(false);
      }
    };


    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchText.trim() !== '') {
      const updatedSearches = [...recentSearches, searchText]; // Append the searched task to recent searches
      const limitedSearches = updatedSearches.slice(-10); // Keep only the last 10 searches
      setRecentSearches(limitedSearches); // Update the recent searches state
      setSearchText(''); // Clear the search input
    }
  };

  const handleClose = (event) => {
    // Check if Enter key is pressed
    if (event.key === 'Enter') {
      handleSearchSubmit();
      closeSearchModal();
    } else if (
      inputRef.current &&
      !inputRef.current.contains(event.target) &&
      !event.target.closest('.recent-searches')
    ) {
      closeSearchModal();
    }
  }

  // const expandSearch = () => {
  //   if()
  // }

  const handleRemove = (index) => {
    setRecentSearches(recentSearches.filter((_, i) => i !== index));
  };

  return (
    <>
      {/* search field */}
      <div className='flex flex-col relative'>
        <div className="search flex px-[4px] py-[1px] border-[1.5px] bg-[rgb(33,33,33)] border-[#414141] justify-center items-center gap-1 rounded-lg shadow-md shadow-[rgba(48,50,51,0.3)]">
          <div onClick={handleSearchSubmit} className=" h-[32px] w-[32px] border-[1.5px] bg-[#313131] border-[#414141] rounded-lg p-1 cursor-pointer  flex justify-center items-center ">
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M29.8333 29.9842L27.1666 27.3175"
                stroke="#b9b9b9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <input
            ref={inputRef}
            className="bg-[#212121] text-[#ffffffcc]  w-[450px] md:w-[280px] lg:w-[500px] border-none outline-none focus:outline-none placeholder:text-[rgba(255,255,255,0.6)] placeholder:font-[300] font-[300] placeholder:focus:outline-none placeholder:focus:border-none placeholder:focus:text-[rgba(255,255,255,0.8)]"
            type="text"
            placeholder="Search for your Dreams.."
            value={searchText}
            onKeyDown={handleClose}
            onChange={handleInputChange}
            onClick={() => setIsExpanded(true)}
          />
          <div className="border-[1.5px] border-[#414141] bg-[#313131] text-[#b9b9b9] p-1 h-[32px] w-[32px] flex justify-center items-center rounded-md font-[400] ">⌘K</div>
        </div>
        {isExpanded && (
          <div className=" z-50 overflow-hidden absolute top-[42.4px] flex flex-col font-[300] text-sm text-[#ffffffbb] bg-[#212121] w-full recent-searches border-[1.5px] border-[#414141] justify-start items-center rounded-lg shadow-md shadow-[rgba(48,50,51,0.3)]">
            {/* Conditional rendering for recent searches */}
            <div className='flex flex-col w-full justify-center items-center'>
              <div className="overflow-hidden px-2 pt-2 pb-1  w-full font-[400] tracking-wider">Popular Searches</div>
              <div className='w-full h-[1px] bg-[#313131]'></div>
              {popularSearches.map((company, index) => (
                <div className='px-2 py-2 flex flex-row w-full justify-between items-center hover:bg-[#313131] '>
                  <div className='pl-2 w-[400px] hover:bg-[#313131] ' key={index}>{company}</div>
                </div>
              ))}
            </div>
            {recentSearches.length === 0 ? (
              <div className='px-2 py-2 flex flex-row w-full justify-center items-center'>No recent searches</div>
            ) : (
              <>
                <div className='overflow-hidden px-2 pt-2 pb-1 w-[280px] lg:w-[486px] font-[400] tracking-wider'>Recent Searches</div>
                <div className='w-[480px] h-[1px] bg-[#313131]'></div>
                {recentSearches.slice(0).reverse().map((search, index) => (
                  <div className="px-2 py-2 flex flex-row w-full justify-between items-center hover:bg-[#313131] ">
                    <svg className='w-[20px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#9a9a9a"><path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12H4C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C9.25022 4 6.82447 5.38734 5.38451 7.50024L8 7.5V9.5H2V3.5H4L3.99989 5.99918C5.82434 3.57075 8.72873 2 12 2ZM13 7L12.9998 11.585L16.2426 14.8284L14.8284 16.2426L10.9998 12.413L11 7H13Z"></path></svg>
                    <div className='pl-2 w-[400px]'>{search}</div>
                    <span className='hover:underline hover:cursor-pointer' onClick={() => setRecentSearches(recentSearches.filter((_, i) => i !== index))}>remove</span>
                  </div>
                ))}
              </>
            )}
          </div>
        )}
      </div>
    </>
  )
}
export default Search
