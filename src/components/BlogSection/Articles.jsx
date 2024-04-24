import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Author from './_Child/Author';
import company from '../../assets/images/company.png'
import { CiBookmark } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CleanHands } from '@mui/icons-material';

const Articles = (props) => {
  const { similarArticles } = props;
  console.log(similarArticles)
  console.log('first')
  return (
    <section className="">
      <div className="container items-center  lg:p-6 p-1 w-full lg:mx-auto mt-12  lg:px-20">
        <h1 className="font-medium lg:text-4xl text-4xl items-center justify-center text-center lg:text-left lg:ml-10 text-slate-900 ">Similar Articles</h1>
        <div className="grid lg:grid-cols-2 gap-0.5">
          {JSON.stringify(similarArticles)}
          {Scroll()}
          {Scroll()}
          {Scroll()}
          {Scroll()}
          {Scroll()}
          {Scroll()}
        </div>
      </div>
    </section>

  );
}

function ReadTime(content) {
  const wpm = 180;
  const words = content.split(' ').length;
  const minutes = Math.ceil(words / wpm);
  return minutes;
}

function restrict(content, wordLimit) {
  const words = content.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return content;
}

function Scroll() {
  const [article, Content] = useState('');
  const [readingTime, Time] = useState(0);

  useEffect(() => {
    const example = "Lorem ipsum dolor sit ametr adipisicing elit. Nobis, accusamus amet fugiat nulla voluptate quia natus possimus minima in sapiente vero, sunt hic, consequuntur aliquid beatae atque dolorem dolorum saepe!";
    Content(example);
  }, []);

  useEffect(() => {
    const TotalReadTime = ReadTime(article);
    Time(TotalReadTime);
  }, [article]);

  return (
    <div className="lg:p-4 p-1 lg:flex lg:flex-row  shrink">

      <Link to="/" className=" lg:border-b-2xl lg:border-b-2xl  hover:sm:shadow-xl sm:shadow-md hover:lg:border-b-gray-500 lg:border-b-gray-300 lg:p-3">
        <div className="lg:flex-col sm:flex-col sm:flex lg:space-x-8 ">
          <div className="image lg:p-5 sm:content-start flex-auto sm:justify-center lg:justify-start justify-center flex items-center">
            <img src={company} alt="User 1" className="lg:h-[250px] lg:p-12 p-3 lg:w-full rounded-md" />
          </div>

          <div className="data items-start lg:justify-start justify-center flex-col p-4 md:mt-0  ">
            <div className="heading">
              <a className="text-xl lg:text-3xl font-bold text-gray-700 hover:text-gray-800" href="/link">
                Druva Interview Experience
              </a>
            </div>
            <div className="lg:text-base text-[18px] "><Author person={{ name: "john", company: "cred" }}/></div>
            <div className="lorem-container text-black py-3 justify-center">
              <p>
                {restrict(article, window.innerWidth <= 640 ? 10 : 20)}
                <span>
                  <a href="/link" className="text-gray-400 hover:text-gray-500">
                    ..Read More
                  </a>
                </span>
              </p>
            </div>
            <div className="flex lg:gap-10 items-center">
              <p className="text-gray-500">{`${readingTime} mins read • 21/12/2022`}</p>
              <div className="flex gap-3 ml-auto">
                <a href="#">
                  <CiHeart color="#888888" />
                </a>
                <a href="#">
                  <CiBookmark color="#888888" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </Link>
    </div>
  );
}

export default Articles;