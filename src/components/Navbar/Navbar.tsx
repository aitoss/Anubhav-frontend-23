import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import arrow from '../../assets/images/arrow.png';

const Navbar = () => {
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

    const navClasses = `bg-white lg:block w-screen text-black py-2 px-4 fixed top-0 z-10 transition-transform transform ${
        visible ? 'translate-y-0' : '-translate-y-full'
    }`;

    return (
        <nav className={navClasses} aria-label="Global">
            <div className="flex justify-between items-center">
                <Link to="/" className="p-2">
                    <img className="" src={logo} alt="" />
                </Link>
                <ul className="lg:flex py-2 px-4 space-x-16">
                    <li>
                        <a href="javascript:void(0)" className="text-[20px] p-2 text-gray-800 hover:text-yellow-400 ">
                            Trending
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" className="text-[20px] p-2 text-gray-800 hover:text-yellow-400">
                            Videos
                        </a>
                    </li>
                    <li className="bg-[#212121] rounded-2xl px-2">
                        <Link to="/Create" className="flex gap-2 p-1 px-2 items-center hover:text-yellow-400 text-[18px] text-white">
                            Write Articles
                            <span className="icon">
                                <img src={arrow} alt="Arrow" className="" />
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
