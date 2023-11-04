import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Author from './_Child/Author';
import company from '../../assets/images/company.png'
import { CiBookmark } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

const Blogs = () => {
  return (
    <div className="container items-center lg:ml-60 ml-8 mt-20 p-3 lg:mx-auto md:px-20 space-y-6">
          <h1 className="font-medium lg:text-5xl text-3xl text-slate-900 ">Title</h1>
          <Author/>
          <div className="data items-start lg:justify-start justify-center flex-col p-4 md:mt-0  ">
            <div className="heading">
              <a className="text-2xl md:text-3xl font-bold text-gray-700 hover:text-gray-800" href="/link">
                Druva Interview Experience
              </a>
            </div>
            <Author />
            <div className="lorem-container text-black py-3 justify-center">
              <p>
              article
                <span>
                  <a href="/link" className="text-gray-400 hover:text-gray-500">
                    ..Read More
                  </a>
                </span>
              </p>
            </div>
            <div className="flex lg:gap-10 items-center">
    <p className="text-gray-500">{`3 mins read • 21/12/2022`}</p>
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
    )
}

export default Blogs