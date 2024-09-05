import React from "react";
import Image from "next/image";
import Details from "./Details";

const CourseItemDetail = ({ yesevaOne, detail }) => {
    return (
        <div className="grow">
            <div className="w-full h-[28.063rem] relative rounded-t-[0.625rem] overflow-hidden">
                <Image
                    src={detail.image}
                    alt={"food-Image"}
                    layout={'fill'}
                    objectFit="cover"
                    className="w-full cursor-pointer"
                />
            </div>
            <div className={`${yesevaOne} text-3xl my-5`}>
                <h1>{detail.itemName?.slice(0, -18)}</h1>
            </div>
            <div className="flex flex-col lg:flex-row gap-y-3 gap-x-16 lg:items-center">
                <div className="flex gap-5 items-center">
                    <div className="w-[3.125rem] h-[3.125rem] relative overflow-hidden rounded-full">
                        <Image
                            src={'/assets/images/recent-review/review-img-3.jpg'}
                            alt={`${detail.itemName}-profile-img`}
                            layout={'fill'}
                            objectFit="cover"
                            className="w-[3.125rem] cursor-pointer"
                        />
                    </div>
                    <div className="text-start">
                        <span className="text-lg text-[#00000080]">By: <span className="text-black text-lg">{detail.by}</span></span>
                    </div>
                </div>
                <div className="flex gap-1">
                    <span className="text-[#F99106] text-lg">{detail.enrolledStudents}</span>
                    <span className="text-lg">Enrolled Students</span>
                </div>
                <div>
                    <div className="flex  items-center gap-x-2">
                        <div className="text-lg text-[#F99106]">{detail.rating}</div>
                        <div className="flex gap-x-2">
                            <div className="max-w-[1.153rem]">
                                <Image
                                    src={'/assets/icons/favorite-rate.svg'}
                                    alt="rating"
                                    height={18.45} width={18.45}
                                    unoptimized
                                    className="w-[1.153rem] cursor-pointer"
                                />
                            </div>
                            <div className="max-w-[1.153rem]">
                                <Image
                                    src={'/assets/icons/favorite-rate.svg'}
                                    alt="rating"
                                    height={18.45} width={18.45}
                                    unoptimized
                                    className="w-[1.153rem] cursor-pointer"
                                />
                            </div>
                            <div className="max-w-[1.153rem]">
                                <Image
                                    src={'/assets/icons/favorite-rate.svg'}
                                    alt="rating"
                                    height={18.45} width={18.45}
                                    unoptimized
                                    className="w-[1.153rem] cursor-pointer"
                                />
                            </div>
                            <div className="max-w-[1.153rem]">
                                <Image
                                    src={'/assets/icons/favorite-rate.svg'}
                                    alt="rating"
                                    height={18.45} width={18.45}
                                    unoptimized
                                    className="w-[1.153rem] cursor-pointer"
                                />
                            </div>
                            <div className="max-w-[1.153rem]">
                                <Image
                                    src={'/assets/icons/blank-rate.png'}
                                    alt="rating"
                                    height={18.45} width={18.45}
                                    unoptimized
                                    className="w-[1.153rem] cursor-pointer"
                                />
                            </div>
                        </div>
                        <div className="text-lg text-[#00000080]">{`(${detail.ratingPerson})`}</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#FFF2F2] shadow-[0px_1px_4px_0px_#00000040] mt-7">
                <span className={`${yesevaOne} py-3 text-center block text-[2.125rem]`}>Details</span>
            </div>
            <div>
                <Details data={detail.details}/>
            </div>
        </div>
    )
}

export default CourseItemDetail;