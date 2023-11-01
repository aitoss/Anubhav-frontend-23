import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Author from './_Child/Author';
import company from '../../assets/images/company.png'
import { CiBookmark } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
const Articles = () => {
    return (
        <section className="">
        <div className="container lg:mx-auto md:px-20">
          <h1 className="font-medium lg:text-5xl text-3xl items-center justify-center lg:ml-10 ml-8 mt-20 p-3 text-slate-900 ">Similar Articles</h1>
          <div className="grid lg:grid-cols-2 gap-0.5">
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
      <div className="lg:p-6 p-1 lg:flex lg:flex-row lg:items-start shrink">
  
        <Link to="/Blog" className=" lg:border-b-2xl md:border-b-2xl  hover:sm:shadow-xl sm:shadow-md hover:border-b-gray-500 lg:border-b-gray-300 p-3">
          <div className="lg:flex-col sm:flex-col sm:flex space-x-8 ">
          <div className="image sm:p-5 sm:content-start flex-auto sm:justify-center lg:justify-start justify-center flex items-center">
    <img src={company} alt="User 1" className="lg:h-[250px] lg:w-full rounded-md" />
  </div>
  
          <div className="data items-start lg:justify-start justify-center flex-col p-4 md:mt-0  ">
            <div className="heading">
              <a className="text-2xl md:text-3xl font-bold text-gray-700 hover:text-gray-800" href="/link">
                Druva Interview Experience
              </a>
            </div>
            <Author />
            <div className="lorem-container text-black py-3 justify-center">
              <p>
              {restrict(article, window.innerWidth <= 640 ? 15 : 20)}
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