import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import arrow from '../../assets/images/arrow.png';
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
    // const content = <>
    //     <div className="lg:hidden block bg-[#212121] items-center p-4 h-screen justify-center  space-y-10 absolute top-10 w-screen bg-sltate-900 transition">
    //         <Link to="/" className="p-2">
    //             <img className="" src={logo} alt="" />
    //         </Link>
    //         <ul className="gap-24">
    //             <li className="text-[20px] text-[#212121] font-[500] head-text  p-2 hover:text-[#313131] ">
    //                 <Link to="/">
    //                     Trending
    //                 </Link>
    //             </li>
    //             <li className="text-[20px] head-text  p-2 text-white hover:text-yellow-400">
    //                 <Link to="/videos">
    //                     Videos
    //                 </Link>
    //             </li>

    //             <li className="">
    //                 <Link to="/create" className="flex gap-2 p-1 px-2 items-center hover:text-yellow-400 text-[20px] text-white">
    //                     Write Articles
    //                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
    //                         <path d="M8.91003 20.171L15.43 13.651C16.2 12.881 16.2 11.621 15.43 10.851L8.91003 4.33103" stroke="#D9D9D9" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    //                     </svg>
    //                 </Link>
    //             </li>
    //         </ul>
    //     </div>
    // </>

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

    const navClasses = `bg-white fixed lg:block w-screen text-black py-2 px-4 fixed top-0 z-10 transition-transform transform ${visible ? 'translate-y-0' : '-translate-y-full'
        }`;

    return (
        <nav className={navClasses} aria-label="Global">
            <div className="hidden lg:block inner-nav bg-orange-300 w-[100%] max-w-[1480px]">
                <div className="flex justify-between items-center">
                    <Link to="/" className="p-2">
                        <img className="" src={logo} alt="" />
                    </Link>
                    <ul className="lg:flex py-2 px-4 space-x-5 nav-items">
                        <li>
                            <a
                                onClick={scrollToBlog}
                                className="text-[20px] text-[#212121] font-[500] head-text  p-2 cursor-pointer hover:text-[#414141] "
                            >
                                Trending
                            </a>
                        </li>
                        <li>
                            <Link to="/videos" className="text-[20px] text-[#212121] font-[500] head-text  p-2 cursor-pointer hover:text-[#414141] ">
                                Videos
                            </Link>
                        </li>
                        <li>
                            <Link to="/guidelines" className="text-[20px] text-[#212121] font-[500] head-text  p-2 cursor-pointer hover:text-[#414141] ">
                                Guidelines
                            </Link>
                        </li>
                        <Link to="/create" className="flex gap-2 p-1 px-2 items-center hover:text-yellow-400 text-[18px] text-white">
                            <div className="flex gap-2 py-[6px] px-5 justify-center items-center text-[20px] bg-[#212121] rounded-full text-[#fff] font-[400] head-text  p-2 cursor-pointer hover:bg-[#414141] hover:focus:outline:none hover:focus:border:none">
                                Write Article
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 10 19" fill="none">
                                    <path d="M1.91003 17.171L8.43003 10.651C9.20003 9.88103 9.20003 8.62103 8.43003 7.85103L1.91003 1.33103" stroke="#fff" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </Link>
                    </ul>
                </div>
            </div>
            <div>
                {click && content}
            </div>
            <button className="block right-0 lg:hidden text-white bg-[#212121] flex-end transition-all" onClick={handleClick}>
                {click ? <FaTimes /> : <CiMenuFries />}
            </button>
        </nav>
    );
};

export default Navbar;
