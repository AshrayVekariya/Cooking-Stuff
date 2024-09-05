'use client';
import React, { useEffect, useState } from "react";
import { featuredMenu } from "@/app/constants/featuredMenu";
import { freeRecipesMenu } from "@/app/constants/freeRecipesMenu";
import { healthyTastyRecipesMenu } from "@/app/constants/healthyTastyRecipesMenu";
import { useParams } from "next/navigation";
import EnrolledNowSection from "./EnrolledNow";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { ImSkype } from "react-icons/im";
import CourseItemDetail from "./CourseItem";

const CourseDetailSection = ({ yesevaOne }) => {
    const params = useParams();
    const [allMenu, setAllMenu] = useState([]);
    const [getCourseDetail, setCourseDetail] = useState({});

    useEffect(() => {
        const data = allMenu.concat(featuredMenu, freeRecipesMenu, healthyTastyRecipesMenu)
        setAllMenu(data)
    }, [])

    useEffect(() => {
        if (allMenu.length) {
            const findCourse = allMenu.find((i) => String(i.id) === params.courseId)
            setCourseDetail(findCourse)
        }
    }, [allMenu, params])

    return (
        <div className="container mx-auto px-4 lg:px-0 py-10">
            <div className="flex flex-col lg:flex-row gap-[1.875rem]">
                <div className="order-1 lg:-order-1">
                    <EnrolledNowSection yesevaOne={yesevaOne.className} detail={getCourseDetail} />
                    <div className={`${yesevaOne.className} mt-[3.75rem]`}>
                        <span className="block text-[2.125rem]">Share Course:</span>
                        <div className="flex mt-5 gap-5 items-center">
                            <FaLinkedin size={40} fill="#00000080" className="cursor-pointer" />
                            <FaFacebookF size={36} fill="#00000080" className="cursor-pointer" />
                            <BiLogoInstagramAlt size={50} fill="#00000080" className="cursor-pointer" />
                            <ImSkype size={40} fill="#00000080" className="cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div className="grow">
                    <CourseItemDetail yesevaOne={yesevaOne.className} detail={getCourseDetail} />
                </div>
            </div>
        </div>
    )
}

export default CourseDetailSection;