

import Tag from '../../InputTag/Tag'

const Tags = ({ data }) => {
  return (
    <>
      <div className="tags flex flex-wrap gap-2 items-center py-1">
        {data?.map((tag) => (
          <Tag name={tag} />
        ))}
      </div>
    </>
  );
};

export default Tags;
