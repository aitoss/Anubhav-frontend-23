import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import './Navbar.css';

const Navbar = () => {
    const scrollToBlog = () => {
        const blogSection = document.getElementById('blog-section');
        if (blogSection) {
            blogSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const content = <>
        <div className="lg:hidden bg-[white] h-screen w-screen flex flex-col items-center justify-center  gap-8 absolute transition duration-300 x-sm:w-[100%]">
            <Link to="/" className="">
                <img className="" src={logo} alt="" />
            </Link>
            <NavLink to="/videos">
                Videos
            </NavLink>
            <NavLink to="/request">
                Request Article
            </NavLink>
            <Link to="/create" className="text-[20px] text-[#212121] font-[500]  p-2 cursor-pointer hover:text-[#313131] ">
                <div className="flex gap-2 py-[6px] px-5 justify-center items-center text-[20px] bg-[#212121] w-[80%]] rounded-lg text-[#fff] font-[400]   p-2 cursor-pointer hover:bg-[#313131] hover:focus:outline:none hover:focus:border:none">
                    Write Article
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 10 19" fill="none">
                        <path d="M1.91003 17.171L8.43003 10.651C9.20003 9.88103 9.20003 8.62103 8.43003 7.85103L1.91003 1.33103" stroke="#fff" strokeWidth="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </Link>
        </div >
    </>

    const [prevScrollPos, setPrevScrollPos] = useState(0);
const [visible, setVisible] = useState(true);

const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const scrollingDown = currentScrollPos > prevScrollPos;

    setVisible(!scrollingDown);
    setPrevScrollPos(currentScrollPos);
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, [prevScrollPos]);

const navClasses = `bg-[#fffffff9] h-[70px] p-3 lg:block w-screen text-black fixed top-0 z-10 transition-transform transform ${visible ? 'translate-y-0' : '-translate-y-full'
    }`;

return (
    <nav className={navClasses} aria-label="Global">
        <div className="hidden lg:block w-[100%] h-full max-w-[1400px] m-auto">
            <div className="flex justify-between">
                <Link to="/" className="p-2">
                    <img className="" src={logo} alt="" />
                </Link>
                <ul className="flex justify-center items-center gap-4">
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/videos">
                            Videos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/guidelines">
                            Guidelines
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/request">
                            Request Article
                        </NavLink>
                    </li>
                    <Link to="/create" className="text-[20px] text-[#212121] font-[400]   p-2 cursor-pointer hover:text-[#313131] ">
                        <div className="flex gap-2 py-[6px] px-5 justify-center items-center text-[20px] bg-[#212121] rounded-lg text-[#fff] font-[400]   p-2 cursor-pointer hover:bg-[#313131] hover:focus:outline:none hover:focus:border:none">
                            Write Article
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 10 19" fill="none">
                                <path d="M1.91003 17.171L8.43003 10.651C9.20003 9.88103 9.20003 8.62103 8.43003 7.85103L1.91003 1.33103" stroke="#fff" strokeWidth="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </Link>
                </ul>
            </div>
        </div>
        <div>
            {click && content}
        </div>
        <button className="absolute right-3 z-50 lg:hidden text-white bg-[#212121] transition-all" onClick={handleClick}>
            {click ? <FaTimes /> : <CiMenuFries />}
        </button>
    </nav>
);
};

export default Navbar;
