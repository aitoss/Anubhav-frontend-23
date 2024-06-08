const Tags = ({ data }) => {
  return (
    <>
      <div className="tags flex flex-wrap gap-2 items-center py-1">
        {data?.map((tag) => (
          <a
            href="#"
            className="tag bg-gray-100 text-black text-[0.9rem] font-semibold me-2 px-2.5 py-0.5 rounded-xl dark:bg-gray-700 dark:text-gray-400 border border-gray-400 inline-flex items-center justify-center"
          >
            {tag}
          </a>
        ))}
      </div>
    </>
  );
};

export default Tags;
