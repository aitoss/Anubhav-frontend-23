import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import arrow from '../../assets/images/arrow.png';
import {FaTimes} from "react-icons/fa";
import {CiMenuFries} from "react-icons/ci";

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
    <div className="lg:hidden block bg-[#212121] items-center p-4 h-screen justify-center  space-y-10 absolute top-10 w-screen bg-sltate-900 transition">
    <Link  to="/" className="p-2">
                    <img className="" src={logo} alt="" />
                </Link>
        <ul className="gap-24">
            <Link  to="/">
            <li className="text-[20px] p-2 text-white hover:text-yellow-400 ">
                Trending
            </li>
            </Link>
            <li className="text-[20px] p-2 text-white hover:text-yellow-400">
            <Link  to="/videos">
                Videos
                </Link>
            </li>
   
            <li className="">
                        <Link  to="/create" className="flex gap-2 p-1 px-2 items-center hover:text-yellow-400 text-[20px] text-white">
                            Write Articles
                            <span className="icon">
                                <img src={arrow} alt="Arrow" className="" />
                            </span>
                        </Link>
                    </li>
        </ul>
    </div>
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

    const navClasses = `bg-white relative lg:block w-screen text-black py-2 px-4 fixed top-0 z-10 transition-transform transform ${
        visible ? 'translate-y-0' : '-translate-y-full'
    }`;

    return (
        <nav className={navClasses} aria-label="Global">
            <div className="hidden lg:block">
            <div className="flex justify-between items-center">
                <Link to="/" className="p-2">
                    <img className="" src={logo} alt="" />
                </Link>
                <ul className="lg:flex py-2 px-4 space-x-16">
                    <li>
                        <a onClick={scrollToBlog} className="text-[20px] cursor-pointer p-2 text-gray-800 hover:text-yellow-400 ">
                            Trending
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" className="text-[20px] p-2 no-underline text-gray-800 hover:text-yellow-400">
                            
                        <Link  to="/videos" className='text-gray-800 hover:text-yellow-400'>
                          Videos
                        </Link>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" className="text-[20px] p-2 no-underline text-gray-800 hover:text-yellow-400">
                            
                        <Link  to="/guidelines" className='text-gray-800 hover:text-yellow-400'>
                          Guidelines
                        </Link>
                        </a>
                    </li>
                    <li className="bg-[#212121] rounded-2xl px-2">
                        <Link to="/create" className="flex gap-2 p-1 px-2 items-center hover:text-yellow-400 text-[18px] text-white">
                            Write Articles
                            <span className="icon">
                                <img src={arrow} alt="Arrow" className="" />
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
            </div>
            <div>
                {click && content}
            </div>
            <button className="block right-0 lg:hidden text-white bg-[#212121] flex-end transition-all" onClick={handleClick}>
                {click ? <FaTimes/> :  <CiMenuFries/>} 
            </button>
        </nav>
    );
};

export default Navbar;
