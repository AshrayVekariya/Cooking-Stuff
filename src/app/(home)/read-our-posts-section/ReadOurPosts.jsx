import React, { Fragment } from "react";
import { readOurPostMenu } from "@/app/constants/readOurPostsMenu";
import Posts from "./PostCard";

const ReadOurPostsSection = ({ yesevaOne }) => {
    return (
        <div key={"post"} className="bg-[#FFF2F2]">
            <div className="container mx-auto px-4 lg:px-0">
                <div className="py-[3.75rem]">
                    <div className={`${yesevaOne.className} text-center`}>
                        <h1 className="text-3xl md:text-4xl lg:text-6xl">Read Our Post</h1>
                    </div>
                    <div className="text-center mt-5">
                        <p className="text-[#00000080] text-1xl md:text-2xl lg:text-3xl">We Specialise in organising Professional Traning Courses</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-[3.313rem] mt-[3.12rem]">
                        {
                            readOurPostMenu.map((item, index) => {
                                return (
                                    <Fragment key={`readOurPostMenu-${index}`}>
                                        <Posts items={item} index={index} yesevaOne={yesevaOne} />
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReadOurPostsSection;