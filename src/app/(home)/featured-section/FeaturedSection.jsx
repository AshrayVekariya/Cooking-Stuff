import React, { Fragment } from "react";
import Card from "@/app/components/card/Card";
import { featuredMenu } from "@/app/constants/featuredMenu";

const FeaturedSection = ({ yesevaOne }) => {
    return (
        <div key={"first-featured-section1"} className="bg-[linear-gradient(to_right_bottom,#ffffffde,#ffffffde),url('/assets/images/featured/featured-bg.png')] bg-cover bg-center cursor-pointer">
            <div className="container mx-auto px-4 lg:px-0">
                <div className="py-[3.75rem]">
                    <div className={`${yesevaOne.className} text-center`}>
                        <h1 className="text-3xl md:text-4xl lg:text-6xl">Featured</h1>
                    </div>
                    <div className="text-center mx-auto mt-5 max-w-[38.688rem]">
                        <p className="text-[#00000080] text-1xl md:text-2xl lg:text-3xl">We Specialise in organising Professional Traning Courses</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20 mt-[3.12rem]">
                        {
                            featuredMenu.map((item, index) => {
                                return (
                                    <div key={`featured-${index}`}>
                                        <Card items={item} index={index} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedSection;