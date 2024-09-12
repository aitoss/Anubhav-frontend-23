import React, { useMemo, useState } from 'react';
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { WobbleCard } from '../components/Tooltip/wobble';
const DevTeamMember = React.memo(({ name, platform, imageSrc, githubId }) => (
    <WobbleCard containerClassName="min-h-[300px]">
        <div className="flex flex-col items-start ">
            <img
                src={imageSrc}
                alt={`${name}'s avatar`}
                className="w-[300px] min-w-[150px] select-none object-cover h-[300px] rounded-[8px]"
                loading="lazy"
            />
            <h3 className=" text-[#212121] text-[24px] font-medium leading-[125%] text-left">{name}</h3>
            <a
                href={`https://github.com/${githubId.replace(' ', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#515151] font-[400] z-10 hover:underline text-[16px]"
            >
                {platform}
            </a>


        </div>
    </WobbleCard>
));


const DevTeam = () => {
    const [activeTeam, setActiveTeam] = useState('current');

    const teamMembers = useMemo(
        () => ({
            current: [
                {
                    id: 1,
                    name: 'Nikhil',
                    platform: 'GitHub',
                    imageSrc: '/assets/images/user1.png',
                    githubId: '404nikhil'
                },
                {
                    id: 2,
                    name: 'Nikhil',
                    platform: 'GitHub',
                    imageSrc: '/assets/images/user2.png',
                    githubId: '404nikhil'
                },
                {
                    id: 3,
                    name: 'Nikhil',
                    platform: 'GitHub',
                    imageSrc: '/assets/images/user3.png',
                    githubId: '404nikhil'
                },
                {
                    id: 4,
                    name: 'Nikhil',
                    platform: 'GitHub',
                    imageSrc: '/assets/images/user3.png',
                    githubId: '404nikhil'
                },
                {
                    id: 5,
                    name: 'Nikhil',
                    platform: 'GitHub',
                    imageSrc: '/assets/images/user1.png',
                    githubId: '404nikhil'
                },
                {
                    id: 6,
                    name: 'Nikhil',
                    platform: 'GitHub',
                    imageSrc: '/assets/images/user2.png',
                    githubId: '404nikhil'
                },
                {
                    id: 7,
                    name: 'Nikhil',
                    platform: 'GitHub',
                    imageSrc: '/assets/images/user3.png',
                    githubId: '404nikhil'
                },
                {
                    id: 8,
                    name: 'Nikhil',
                    platform: 'GitHub',
                    imageSrc: '/assets/images/user3.png',
                    githubId: '404nikhil'
                },
            ],
            firstGen: [
                {
                    id: 11,
                    name: 'Nikhil',
                    platform: 'GitHub',
                    imageSrc: '/assets/images/user1.png',
                    githubId: '404nikhil'
                },
                {
                    id: 12,
                    name: 'Nikhil',
                    platform: 'GitHub',
                    imageSrc: '/assets/images/user2.png',
                    githubId: '404nikhil'
                },
                {
                    id: 13,
                    name: 'Nikhil',
                    platform: 'GitHub',
                    imageSrc: '/assets/images/user3.png',
                    githubId: '404nikhil'
                },
                {
                    id: 14,
                    name: 'Nikhil',
                    platform: 'GitHub',
                    imageSrc: '/assets/images/user3.png',
                    githubId: '404nikhil'
                },
                {
                    id: 15,
                    name: 'Nikhil',
                    platform: 'GitHub',
                    imageSrc: '/assets/images/user3.png',
                    githubId: '404nikhil'
                },
                {
                    id: 16,
                    name: 'Nikhil',
                    platform: 'GitHub',
                    imageSrc: '/assets/images/user3.png',
                    githubId: '404nikhil'
                },
                {
                    id: 17,
                    name: 'Nikhil',
                    platform: 'GitHub',
                    imageSrc: '/assets/images/user3.png',
                    githubId: '404nikhil'
                },
                {
                    id: 18,
                    name: 'Nikhil',
                    platform: 'GitHub',
                    imageSrc: '/assets/images/user3.png',
                    githubId: '404nikhil'
                },
            ],
        }),
        []
    );
    return (
        <>
            <Navbar />
            <div className="flex flex-col mx-auto min-h-screen">
                <div className="flex-grow overflow-y-auto max-w-10xl mx-auto py-16 px-4 sm:px-6 lg:px-6 text-center">
                    <h2 className="text-2xl font-bold mb-4">Dev Team</h2>
                    <div className="flex justify-center gap-2 mb-6">
                        <span
                            className={`cursor-pointer flex gap-1 border px-3 py-1 rounded-full ${activeTeam === 'current' ? 'border-[#e5e7eb] bg-white' : 'border-[#f7f7f8]'
                                }`}
                            onClick={() => setActiveTeam('current')}
                        >
                            Current Team
                            {activeTeam === 'current' && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.625 12L9.87 16.245L18.375 7.755" stroke="#414141" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            }
                        </span>
                        <span
                            className={`cursor-pointer flex gap-1 border px-3 py-1 rounded-full ${activeTeam === 'firstGen' ? 'border-[#e5e7eb] bg-white' : 'border-[#f7f7f8]'
                                }`}
                            onClick={() => setActiveTeam('firstGen')}
                        >
                            First Gen
                            {activeTeam === 'firstGen' && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.625 12L9.87 16.245L18.375 7.755" stroke="#414141" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            }
                        </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-6">
                        {teamMembers[activeTeam].map((member) => (
                            <DevTeamMember key={member.id} {...member} />
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default DevTeam;