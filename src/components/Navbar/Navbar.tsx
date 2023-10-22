import React from 'react'
import logo from '../../assets/images/logo.png';
import arrow from '../../assets/images/arrow.png'

const Navbar = () => {
    return (
        <nav className="bg-white text-black py-2 px-4 fixed top-0 w-full z-10" aria-label="Global">
            <div className="flex lg:flex-1 space-x-[660px]">

                <a href="#" className="ml-[128px] p-2">

                    <img className="h-8 w-auto" src={logo} alt="" />
                </a>


                <ul className=" w-8/12 items-end lg:flex py-2 px-4 justify-center space-x-16">
                    <li>
                        <a href="javascript:void(0)" className="text-[18px] p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 ">
                            Trending
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" className="text-[18px] p-2  text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 ">
                            Videos
                        </a>
                    </li>
                    <li className='bg-[#212121] rounded-3xl px-2'>
                        <a href="javascript:void(0)" className="flex gap-2 p-1  px-2 items-center text-[18px] hover:text-yellow text-white ">
                            Write Articles
                            <span><img src={arrow} alt="Arrow" /></span>
                        </a>


                    </li>

                </ul>

            </div>
        </nav>
    )
}

export default Navbar;