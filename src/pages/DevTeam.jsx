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
                    name: 'Harshal Patil',
                    platform: 'GitHub',
                    imageSrc: 'https://i.ibb.co/n7HCZVK/heroo.jpg',
                    githubId: 'Harshal141'
                },
                {
                    id: 2,
                    name: 'Nikhil Dhariwal',
                    platform: 'GitHub',
                    imageSrc: 'https://i.ibb.co/tD0zj4L/e67e8359-f727-4bfb-ae94-da504e6c8672.jpg',
                    githubId: '404nikhil'
                },
                {
                    id: 3,
                    name: 'Lokendra Kushwah',
                    platform: 'GitHub',
                    imageSrc: 'https://i.ibb.co/RvYpC54/pfpV4.png',
                    githubId: 'Lokendrakushwah12'
                },
                {
                    id: 4,
                    name: 'Gourav',
                    platform: 'GitHub',
                    imageSrc: 'https://i.ibb.co/X5yh8XF/Whats-App-Image-2023-08-21-at-22-39-13.jpg',
                    githubId: 'Gourav2609'
                },
                {
                    id: 5,
                    name: 'Darshan Garad',
                    platform: 'GitHub',
                    imageSrc: 'https://avatars.githubusercontent.com/u/118094848?v=4',
                    githubId: 'darkars33'
                },
            ],
            firstGen: [
                {
                    id: 11,
                    name: 'Arpit kr Mishra',
                    platform: 'GitHub',
                    imageSrc: 'https://i.ibb.co/k5Gj6Qb/arpitdp.jpg',
                    githubId: 'arkumish'
                },
                {
                    id: 12,
                    name: 'Akshay Sharma',
                    platform: 'GitHub',
                    imageSrc: 'https://i.ibb.co/XJd1wX3/80065270-165855167986313-7011278912353206272-o.jpg',
                    githubId: 'AkshaySharma008'
                },
                {
                    id: 13,
                    name: 'Satya Prakash',
                    platform: 'GitHub',
                    imageSrc: 'https://i.imgur.com/m6eMSyV.jpeg',
                    githubId: 'satya9500'
                },
                {
                    id: 14,
                    name: 'Akash Saxena',
                    platform: 'GitHub',
                    imageSrc: 'https://i.ibb.co/1nk25pt/118046919-1261093334242620-4374261586150049648-o.jpg',
                    githubId: 'Akashsaxena2308'
                },
                {
                    id: 15,
                    name: 'Rishabh Rathore',
                    platform: 'GitHub',
                    imageSrc: 'https://i.ibb.co/rwQDwvQ/70093190-947181732307968-2361262531307110400-o.jpg',
                    githubId: 'xerycks'
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
                    <div className="flex flex-col lg:flex-row justify-center gap-4 sm:gap-6 lg:gap-6">
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