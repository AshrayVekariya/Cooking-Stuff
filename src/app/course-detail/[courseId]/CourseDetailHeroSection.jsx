import BreadCrumb from "@/app/components/bread-crumbs";
import React from "react";

const CourseDetailHeroSection = ({ yesevaOne }) => {
    return (
        <div>
            <div className="min-h-[18rem] bg-[url('/assets/images/course-detail/course-hero-bg.png')] bg-cover bg-center">
                <div className="container mx-auto px-4 py-[5.625rem] lg:px-0">
                    <div className={`${yesevaOne.className} mb-[1.875rem]`}>
                        <h1 className="text-[2.625rem]">Course Details</h1>
                    </div>
                    <div>
                        <BreadCrumb
                            crumbs={[
                                { label: 'Home', link: '/' },
                                { label: 'Courses', link: '' },
                            ]}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseDetailHeroSection;