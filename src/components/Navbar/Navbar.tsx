import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import arrow from '../../assets/images/arrow.png'

const Navbar = () => {
    return (
        <nav className="bg-white lg:block hidden w-screen text-black py-2 px-4 fixed top-0 z-10" aria-label="Global">
            <div className="flex space-x-[660px]">

                <Link to="/" className="ml-[128px] p-2">

                    <img className="w-20" src={logo} alt="" />
                </Link>


                <ul className=" w-8/12 items-end lg:flex py-2 px-4 space-x-16">
                    <li>
                        <a href="javascript:void(0)" className="text-[18px] p-2 text-gray-800 hover:text-yellow-400">
                            Trending
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" className="text-[18px] p-2  text-gray-800 hover:text-yellow-400 ">
                            Videos
                        </a>
                    </li>
                    <li className='bg-[#212121] rounded-3xl px-2'>
                        <Link to="/Create" className="flex gap-2 p-1 px-2 items-center hover:text-yellow-400 text-[18px] text-white ">
                            Write Articles
                            <span><img src={arrow} alt="Arrow" /></span>
                        </Link>


                    </li>

                </ul>

            </div>
        </nav>
    )
}

export default Navbar;