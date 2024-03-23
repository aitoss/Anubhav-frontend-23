import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Cross as Hamburger } from 'hamburger-react'
import logo from '../../assets/images/logo.svg';
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    const scrollToBlog = () => {
        const blogSection = document.getElementById('blog-section');
        if (blogSection) {
            blogSection.scrollIntoView({ behavior: 'mdooth' });
        }
    };

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const content =
        <>
            <div className="lg:hidden bg-[white] left-0 h-screen w-screen flex flex-col items-center justify-center gap-8 absolute transition duration-300 x-md:w-[100%]">
                {/* <NavLink to="/videos">
                Videos
            </NavLink> */}
                <NavLink to="/request">
                    Request Article
                </NavLink>
                <Link to="/create" className="text-[20px] text-[#212121] font-[500]  p-1 cursor-pointer hover:text-[#313131] ">
                    <div className="flex gap-2 py-1 px-2 justify-center items-center text-[20px] bg-[#212121] rounded-lg text-[#fff] font-[400]   p-2 cursor-pointer hover:bg-[#313131] hover:focus:outline:none hover:focus:border:none">
                        Write Article
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 10 19" fill="none">
                            <path d="M1.91003 17.171L8.43003 10.651C9.20003 9.88103 9.20003 8.62103 8.43003 7.85103L1.91003 1.33103" stroke="#fff" strokeWidth="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </Link>
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

    const navClasses = `bg-[#ffffffcc] bg-blur border-b flex item-center justify-center h-[70px] p-3 lg:flex w-screen text-black fixed top-0 z-10 transition-transform transform ${visible ? 'translate-y-0' : '-translate-y-full'
        }`;

    return (
        <>
            <motion.div
                initial={{ opacity: 0, translateY: 0 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: 100 }}
                transition={{ duration: 0.15, delay: 0.05 }}
            >

                <nav className={navClasses} aria-label="Global">

                    <div className="flex md:hidden w-full h-full justify-between items-center max-w-[1400px] m-auto">
                        <div className="flex w-full items-center justify-between px-8 md:px-0">
                            <Link to="/" className="p-2">
                                <img className="" src={logo} alt="" />
                            </Link>
                            <ul className="flex justify-center items-center gap-2">
                                <li className='hover:underline'>
                                    <NavLink to="/">
                                        Home
                                    </NavLink>
                                </li>
                                {/* <li className='hover:underline'>
                                    <NavLink to="/videos">
                                        Videos
                                    </NavLink>
                                </li> */}
                                <li className='hover:underline'>
                                    <NavLink to="/guidelines">
                                        Guidelines
                                    </NavLink>
                                </li>
                                <li className='hover:underline'>
                                    <NavLink to="/request">
                                        Request Article
                                    </NavLink>
                                </li>
                                <Link to="/create" className="text-[20px] text-[#212121] font-[400]   p-1 cursor-pointer hover:text-[#313131] ">
                                    <div className="flex gap-2 py-1 px-2 justify-center items-center text-[20px] bg-[#212121] rounded-lg text-[#fff] font-[400]   p-2 cursor-pointer hover:bg-[#313131] hover:focus:outline:none hover:focus:border:none">
                                        Write Article
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 10 19" fill="none">
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
                    <div className="hidden md:flex w-full items-center justify-between px-8 md:px-0">
                        <Link to="/" className="md:flex hidden p-2">
                            <img className="" src={logo} alt="" />
                        </Link>
                        <div className="items-center justify-center p-0 m-0 z-50 md:flex hidden text-white transition-all" onClick={handleClick}>
                            {/* {click ? <FaTimes /> : <CiMenuFries />} */}
                            <Hamburger direction="right" color="#212121" size={32} toggled={isOpen} toggle={setOpen} />
                        </div>
                    </div>
                </nav>
            </motion.div>
        </>
    );
};

export default Navbar;
