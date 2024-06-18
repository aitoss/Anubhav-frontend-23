import React from 'react'
import { Skeleton, SVGSkeleton, SVGSkeletonWhite } from "./Skeleton";

const BlogLoading = () => {
    return (
        <>
            <div className="container items-center lg:p-6 mx-auto lg:mx-auto lg:w-[65%] lg:px-20 p-5">
                <br />
                <br />
                <br />
                <div className="w-full items-start lg:justify-start justify-center flex-col lg:p-4 space-y-2 md:mt-0">
                    <div>
                        <a className="tracking-tighter flex flex-col gap-2">
                            <Skeleton className="md:w-[632px] h-[40px] max-w-full" />
                            <Skeleton className="w-[332px] h-[40px] max-w-full" />
                        </a>
                    </div>
                    <div className="flex items-center py-2 gap-2">
                        <div className="w-6 h-6 flex justify-center items-center ">
                            <SVGSkeleton className="w-[17px] h-[17px] rounded-full" />
                        </div>
                        <a className="md-xl:w-24">
                            <Skeleton className="w-[96px] max-w-full" />
                        </a>
                        <div className="h-4 w-[1px]"></div>
                        <a className="md-xl:w-24">
                            <Skeleton className="w-[64px] max-w-full" />
                        </a>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center py-1">
                        <a className='rounded-full'>
                            <div className="flex gap-1  px-2 items-center justify-center">
                                <Skeleton className="w-[112px] max-w-full" />
                            </div>
                        </a>
                        <a className='rounded-full'>
                            <div className="flex gap-1  px-2 items-center  justify-center">
                                <Skeleton className="w-[40px] max-w-full" />
                            </div>
                        </a>
                        <a className='rounded-full'>
                            <div className="flex gap-1  px-2 items-center  justify-center">
                                <Skeleton className="w-[96px] max-w-full" />
                            </div>
                        </a>
                        <a className='rounded-full'>
                            <div className="flex gap-1  px-2 items-center  justify-center">
                                <Skeleton className="w-[56px] max-w-full" />
                            </div>
                        </a>
                    </div>
                    <div className="flex pb-4 lg:gap-10 items-center">
                        <p>
                            <Skeleton className="w-[192px] max-w-full" />
                        </p>
                        <div className="flex gap-3 ml-auto">
                            <a>
                                <SVGSkeleton className="w-[1rem] h-[1rem]" />
                            </a>
                            <a>
                                <SVGSkeleton className="w-[1rem] h-[1rem]" />
                            </a>
                        </div>
                    </div>
                    <div className="lorem-container py-3 flex flex-col items-center justify-center">
                        <div className="lg:pb-10 w-full flex flex-col items-center justify-center">
                            <SVGSkeleton className="lg:h-[300px] lg:w-[750px] x-sm:h-[200px] md:h-[300px] object-cover rounded-lg w-full h-[400px]" />
                        </div>
                        <div className="w-full shadow-none">
                            <div className="wmde-markdown-color w-full h-full">
                                <p>
                                    <Skeleton className="w-[3376px] max-w-full" />
                                </p>
                                <p>
                                    <Skeleton className="w-[1456px] max-w-full" />
                                </p>
                                <p>
                                    <Skeleton className="w-[1304px] max-w-full" />
                                </p>
                                <pre>
                                    <Skeleton className="w-[3376px] max-w-full" />
                                    <div>
                                        <SVGSkeletonWhite className="w-[12px] h-[12px]" />
                                        <SVGSkeletonWhite className="w-[12px] h-[12px]" />
                                    </div>
                                </pre>
                                <p>
                                    <Skeleton className="w-[2016px] max-w-full" />
                                </p>
                                <pre>
                                    <Skeleton className="w-[4304px] max-w-full" />
                                    <div>
                                        <SVGSkeletonWhite className="w-[12px] h-[12px]" />
                                        <SVGSkeletonWhite className="w-[12px] h-[12px]" />
                                    </div>
                                </pre>
                                <p>
                                    <Skeleton className="w-[584px] max-w-full" />
                                </p>
                                <pre>
                                    <Skeleton className="w-[4592px] max-w-full" />
                                    <div>
                                        <SVGSkeleton className="w-[120px] h-[12px]" />
                                        <SVGSkeletonWhite className="w-[12px] h-[12px]" />
                                    </div>
                                </pre>
                                <pre>
                                    <Skeleton className="w-[1464px] max-w-full" />
                                    <div>
                                        <SVGSkeletonWhite className="w-[12px] h-[12px]" />
                                        <SVGSkeleton className="w-full h-[12px]" />
                                    </div>
                                </pre>
                                <pre>
                                    <Skeleton className="w-[3688px] max-w-full" />
                                    <div>
                                        <SVGSkeletonWhite className="w-[12px] h-[12px]" />
                                        <SVGSkeletonWhite className="w-[12px] h-[12px]" />
                                    </div>
                                </pre>
                                <p>
                                    <Skeleton className="w-[448px] max-w-full" />
                                </p>
                                <pre>
                                    <Skeleton className="w-[696px] max-w-full" />
                                    <div>
                                        <SVGSkeletonWhite className="w-[12px] h-[12px]" />
                                        <SVGSkeletonWhite className="w-[12px] h-[12px]" />
                                    </div>
                                </pre>
                                <pre>
                                    <Skeleton className="w-[3432px] max-w-full" />
                                    <div>
                                        <SVGSkeletonWhite className="w-[12px] h-[12px]" />
                                        <SVGSkeletonWhite className="w-[12px] h-[12px]" />
                                    </div>
                                </pre>
                                <p>
                                    <Skeleton className="w-[712px] max-w-full" />
                                </p>
                                <p>
                                    <Skeleton className="w-[936px] max-w-full" />
                                </p>
                                <p>
                                    <Skeleton className="w-[2096px] max-w-full" />
                                </p>
                                <p>
                                    <Skeleton className="w-[1232px] max-w-full" />
                                </p>
                                <p>
                                    <Skeleton className="w-[1056px] max-w-full" />
                                </p>
                                <p>
                                    <Skeleton className="w-[3496px] max-w-full" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogLoading