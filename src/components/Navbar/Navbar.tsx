import React from 'react'
import logo from '../../assets/images/logo.png';

const Navbar = () => {
    return (
        <nav className="bg-white text-black py-2 px-4 fixed top-0 w-full z-10" aria-label="Global">
            <div className="flex lg:flex-1 space-x-[660px]">

                <a href="#" className="ml-[128px] p-2">
               
                    <img className="h-8 w-auto" src={logo} alt="" />
                </a>


                <ul className="hidden w-8/12 md:flex items-end py-2 px-4 justify-center space-x-16">
                    <li>
                        <a href="javascript:void(0)" className="text-[20px] text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 ">
                            Trending
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" className="text-[20px]  text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 ">
                            Videos
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" className="text-[20px]  text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 ">
                            Write Articles
                        </a>
                    </li>

                </ul>

            </div>
        </nav>
    )
}

export default Navbar;