import React, { useMemo, useState } from 'react';
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const DevTeamMember = React.memo(({ name, platform, imageSrc, githubId }) => (
    <div className="flex flex-col items-start p-4">
        <img
            src={imageSrc}
            alt={`${name}'s avatar`}
            className="w-[300px] min-w-[150px] object-cover h-[300px] rounded-lg"
            loading="lazy"
        />
        <h3 className="mt-2 mb-1 font-semibold text-left text-sm sm:text-base lg:text-lg">{name}</h3>
        <a
            href={`https://github.com/${githubId.replace(' ', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-xs sm:text-sm lg:text-base"
        >
            {platform}
        </a>
    </div>
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
                    <div className="flex justify-center gap-6 mb-6">
                        <span
                            className={`cursor-pointer ${activeTeam === 'current' ? 'font-bold' : ''
                                }`}
                            onClick={() => setActiveTeam('current')}
                        >
                            Current Team
                        </span>
                        <span
                            className={`cursor-pointer ${activeTeam === 'firstGen' ? 'font-bold' : ''
                                }`}
                            onClick={() => setActiveTeam('firstGen')}
                        >
                            First Gen
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