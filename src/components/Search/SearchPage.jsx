import React from 'react'
import NavbarMini from '../Navbar/NavbarMini'
import BlogCard from '../BlogSection/BlogCard'
import './SearchPage.css'

const SearchPage = () => {
    const [placement, setplacement] = React.useState(true);
    const [intern, setintern] = React.useState(false);
    const [videos, setvideos] = React.useState(false);

    const handlePlacement = () => {
        setplacement(!placement);
        setintern(false);
        setvideos(false);
    }

    const handleIntern = () => {
        setintern(!intern);
        setplacement(false);
        setvideos(false);
    }

    const handleVideos = () => {
        setvideos(!videos);
        setplacement(false);
        setintern(false);
    }

    return (
        <>
            <NavbarMini />
            <div className="pt-24 px-8  md:px-2 lg:px-14 2xl:px-28 h-full">
                <div className="w-full flex gap-8 h-full">
                    <div className="section-left w-full flex flex-col gap-2 h-full">
                        <h3 className='font-[400] text-2xl'>18 Articles found</h3>
                        <BlogCard Title="Google STEP Internship"
                            author="Kamakshi Dixit"
                            company="Google"
                            readingTime={20}
                            date="21/12/2022"
                        />
                        <BlogCard Title="Google STEP Internship"
                            author="Kamakshi Dixit"
                            company="Google"
                            readingTime={20}
                            date="21/12/2022"
                        />
                        <BlogCard Title="Google STEP Internship"
                            author="Kamakshi Dixit"
                            company="Google"
                            readingTime={20}
                            date="21/12/2022"
                        />
                         <BlogCard Title="Google STEP Internship"
                            author="Kamakshi Dixit"
                            company="Google"
                            readingTime={20}
                            date="21/12/2022"
                        />
                    </div>
                    <div className="section-right w-1/5 flex flex-col gap-2">
                        <h5 className='font-[500]'>Filter by</h5>
                        <div className="flex flex-col gap-1 ">
                            <div
                                onClick={() => handlePlacement()}
                                className={`flex relative justify-between px-2 py-1 rounded-md hover:bg-[#f0f0f0] transition-all cursor-pointer ${placement ? 'bg-[#f0f0f0]' : ''}`}
                            >
                                {placement && <div className='absolute w-1 h-4 bg-[#919191] rounded-full top-2 -left-2'></div>}
                                <h5>Placement</h5>
                                <h5 className='bg-[#e0e0e0] w-6 flex justify-center items-center rounded-full font-[300]'>12</h5>
                            </div>
                            <div
                                onClick={() => handleIntern()}
                                className={`flex relative justify-between px-2 py-1 rounded-md hover:bg-[#f0f0f0] transition-all cursor-pointer  ${intern ? 'bg-[#f0f0f0]' : ''}`}
                            >
                                {intern && <div className='absolute w-1 h-4 bg-[#919191] rounded-full top-2 -left-2'></div>}
                                <h5>Intern</h5>
                                <h5 className='bg-[#e0e0e0] w-6 flex justify-center items-center rounded-full font-[300]'>6</h5>
                            </div>
                            <div
                                onClick={() => handleVideos()}
                                className={`flex relative justify-between px-2 py-1 rounded-md hover:bg-[#f0f0f0] transition-all cursor-pointer  ${videos ? 'bg-[#f0f0f0]' : ''}`}
                            >
                                {videos && <div className='absolute w-1 h-4 bg-[#919191] rounded-full top-2 -left-2'></div>}
                                <h5>Videos</h5>
                                <h5 className='bg-[#e0e0e0] w-6 flex justify-center items-center rounded-full font-[300]'>3</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchPage