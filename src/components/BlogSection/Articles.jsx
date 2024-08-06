import BlogCard from "./BlogCard";
import company from "../../assets/images/company.png";
import { ReadTime } from "../../services/date";

// TODO: update the view of similar articles
const Articles = (props) => {
  const { similarArticles } = props;
  return (
    <section className="">
      <div className="container p-4 w-full lg:mx-auto mt-10">
        <h1 className="font-medium lg:text-4xl text-4xl items-center justify-center text-center lg:text-left lg:ml-10 text-slate-900 ">
          Similar Articles
        </h1>
        <br />
        {similarArticles.map((item) => (
          <BlogCard
            key={item._id} // Added key prop for list rendering
            link={`/blog/${item._id}`}
            Title={item.title}
            imagesrc={
              item.imageUrl == "your_image_url_here" ? company : item.imageUrl
            }
            author={item.author?.name}
            company={item.companyName}
            data={item.description}
            readingTime={ReadTime(item.description)}
            date={item.createdAt}
          />
        ))}
      </div>
    </section>
  );
};

export default Articles;