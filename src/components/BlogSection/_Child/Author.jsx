const author = ({ person }) => {
  return (
    <div className="author flex items-center py-2">
      <div className="flex items-center gap-2">
        <a
          href="#"
          className="text-md hover:text-gray-600 text-gray-700 md:text-[15px]"
        >
          {person?.name}
        </a>
        <span className="text-[#a0a0a0] font-[200]">|</span>
        <a href="#" className="text-md text-slate-700 hover:text-black">
          {person?.company}
        </a>
      </div>
    </div>
  );
};

export default author;
