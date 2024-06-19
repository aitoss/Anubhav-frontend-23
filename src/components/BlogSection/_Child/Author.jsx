const author = ({ person }) => {
  return (
    <div className="author flex items-center py-2 gap-2">
        <div className="rounded-full w-6 h-6 flex justify-center items-center bg-[#d6d6d6]">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="#292D32" />
            <path d="M12 14.5C6.99003 14.5 2.91003 17.86 2.91003 22C2.91003 22.28 3.13003 22.5 3.41003 22.5H20.59C20.87 22.5 21.09 22.28 21.09 22C21.09 17.86 17.01 14.5 12 14.5Z" fill="#292D32" />
          </svg>
        </div>

        <a className="text-md md-xl:w-24 text-[#414141] font-[400] md:text-[15px] truncate" >
          {person?.name}
        </a>
        <div className="bg-[#a9a9a9] h-4 w-[1px]" />
        <a className="text-md md-xl:w-24 font-[300] text-[#414141] truncate">
          {person?.company}
        </a>
      </div>
  );
};

export default author;
