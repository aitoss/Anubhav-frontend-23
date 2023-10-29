import React from 'react';
import Author from './_Child/Author';
import user1Image from '../../assets/images/user1.png';
import { CiBookmark } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

const BlogSection = () => {
  return (
    <section className="lg:py-4 lg:-mt-24">
      <div className="container lg:mx-auto  md:px-20">
        <h1 className="font-semibold text-5xl lg:pb-12 p-5 text-slate-900 text-center">Trending Stories</h1>
        <div></div>
        {Scroll()}
        {Scroll()}
        {Scroll()}
        {Scroll()}
      </div>
    </section>
  );
}

function Scroll() {
  return (

    <div className="lg:p-6 p-4">
    <a href="/link" className="block lg:grid lg:grid-cols-2 lg:rounded-3xl md:rounded-3xl lg:border hover:border-gray-400 lg:border-gray-300 p-3">
      <div className="image mx-auto lg:h-30 lg:w-30 justify-center flex items-center">
        <img src={user1Image} alt="User 1" className="lg:w-30 lg:h-30 rounded-md mx-auto w-30 h-30" />
      </div>
      <div className="data lg:h-60 flex justify-center lg:-ml-10 flex-col p-4 md:mt-0  ">
        <div className="heading">
          <a className="text-2xl md:text-4xl font-bold text-gray-700 hover:text-gray-800" href="/link">
            Druva Interview Experience
          </a>
        </div>
        <Author />
        <div className="lorem-container text-black py-3 justify-center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, accusamus amet fugiat nulla voluptate quia
            natus possimus minima in sapiente vero, sunt hic, consequuntur aliquid beatae atque dolorem dolorum saepe!
            <span>
              <a href="/link" className="text-gray-400 hover:text-gray-500">
                ..Read More
              </a>
            </span>
          </p>
        </div>
        <div className="flex lg:gap-96 gap-10">
          <p className="text-gray-500">3 mins read • 21/12/2022</p>
          <div className="flex gap-3">
            <a href="#">
              <CiHeart color="#888888" />
            </a>
            <a href="#">
              <CiBookmark color="#888888" />
            </a>
          </div>
        </div>
      </div>
    </a>
    </div>
  );
}



export default BlogSection;
