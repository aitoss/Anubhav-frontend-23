import { React, useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const MobileNav = ({ isOpen }) => {
    // const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        console.log(isOpen);
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'scroll';
        }
    }, []);

    return (
        <>

            <div className={`z-40 fixed top-[70px] bg-[#ffffffbb] bg-blur w-full shadow-lg shadow-[rgba(0,0,0,0.07)]`}>
                <div className="flex flex-col justify-center  border-b pb-2">
                    <NavLink className=" p-4 text-center hover:bg-[#00000012]" to="/guidelines">
                        <motion.div
                            className='w-full h-full'
                            initial={{ opacity: 0, translateY: -10 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            exit={{ opacity: 0, translateY: -10 }}
                            transition={{ duration: 0.1, delay: 0.05 }}
                        >
                            Guidelines
                        </motion.div>
                    </NavLink>
                    <NavLink className=" p-4 text-center hover:bg-[#00000012]" to="/request">
                        <motion.div
                            className='w-full h-full'
                            initial={{ opacity: 0, translateY: -10 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            exit={{ opacity: 0, translateY: -10 }}
                            transition={{ duration: 0.1, delay: 0.07 }}
                        >

                            Request Article
                        </motion.div>
                    </NavLink>
                    <Link to="/create" className="px-3 text-[20px] text-[#212121] font-[500]  p-1 cursor-pointer hover:text-[#313131] ">
                        <motion.div
                            className='w-full h-full'
                            initial={{ opacity: 0, translateY: -10 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            exit={{ opacity: 0, translateY: -10 }}
                            transition={{ duration: 0.1, delay: 0.09 }}
                        >
                            <div className="flex gap-2 py-2 px-2 justify-center items-center text-[20px] bg-[#212121] rounded-lg text-[#fff] font-[400]   p-2 cursor-pointer hover:bg-[#313131] hover:focus:outline:none hover:focus:border:none">

                                Write Article
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 10 19" fill="none">
                                    <path d="M1.91003 17.171L8.43003 10.651C9.20003 9.88103 9.20003 8.62103 8.43003 7.85103L1.91003 1.33103" stroke="#fff" strokeWidth="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </motion.div>
                    </Link>
                </div>
            </div>
            {/* </motion.div> */}
        </>
    )
}

export default MobileNav
