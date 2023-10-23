import React from 'react';
import Author from './_Child/author';
import user1Image from '../../assets/images/user1.png';

const BlogSection = () => {
  return (
    <section className="py-4 -mt-24">
      <div className="container mx-auto md:px-20">
        <h1 className="font-semibold text-5xl pb-12 text-black text-center">Trending Stories</h1>
        {Slide()}
      </div>
    </section>
  );
}

function Slide() {
  return (
    <div className="grid md:grid-cols-2">
      <div className=" image">
        <a href="">
          <img src={user1Image} alt="User 1" width={300} height={300} />
        </a>
      </div>
      <div className="data flex justify-center flex-col">
        <div className="heading">
            <a className="text-3xl md:text-4xl font-bold text-gray-700 hover:text-gray-800" href="">Druva Interview Experience</a>
        </div>
        <Author></Author>
        <p className="text-black py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, accusamus amet fugiat nulla voluptate quia natus possimus minima in sapiente vero, sunt hic, consequuntur aliquid beatae atque dolorem dolorum saepe!
        </p>
      </div>
    </div>
  );
}

export default BlogSection;
