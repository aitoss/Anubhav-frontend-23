import React from 'react';
import Author from './_Child/Author';
import user1Image from '../../assets/images/user1.png';
import { CiBookmark } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

const BlogSection = () => {
  return (
    <section className="py-4 -mt-24">
      <div className="container mx-auto md:px-20">
        <h1 className="font-semibold text-5xl pb-12 text-black text-center">Trending Stories</h1>
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
    <div className="grid md:grid-cols-2 py-4 -gap-2 h-64">
      <div className="image h-60 justify-center shrink-0 ml-24">
        <a href="">
          <img src={user1Image} alt="User 1" className="w-96 h-60"  />
        </a>
      </div>
      <div className="data h-60 flex justify-center -ml-6 flex-col p-4 md:mt-0">
        <div className="heading">
            <a className="text-3xl md:text-4xl font-bold text-gray-700 hover:text-gray-800" href="">Druva Interview Experience</a>
        </div>
        <Author></Author>
        <p className="text-black py-3 justify-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, accusamus amet fugiat nulla voluptate quia natus possimus minima in sapiente vero, sunt hic, consequuntur aliquid beatae atque dolorem dolorum saepe!
        </p>
        <div className="flex gap-96">
        <p className="text-gray-500 ">3 mins read • 21/12/2022</p>
        <div className="flex gap-3">
        <a href="" className=""><CiHeart/></a>
        <a href=""><CiBookmark/></a>
        </div>
        </div>
      </div>
    </div>
  );
}


export default BlogSection;
