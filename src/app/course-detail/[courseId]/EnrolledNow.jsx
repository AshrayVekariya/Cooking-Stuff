import React from "react";
import EnrolledNowItems from "./EnrolledNowItem";
import { FaRegUser } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { MdOutlineVideoChat } from "react-icons/md";
import { BsFileBarGraph } from "react-icons/bs";
import { MdLanguage } from "react-icons/md";
import { RiFileListLine } from "react-icons/ri";
import Button from "@/app/components/buttons/Button";

const EnrolledNowSection = ({ yesevaOne,detail }) => {
    return (
        <div className="w-full lg:w-[371px] bg-[#FFF2F2] shadow-[0px_1px_4px_0px_#00000040] p-5">
            <span className="text-center block border-b border-[#F99106] pb-5 text-2xl font-medium">{detail.enrolledDetail?.coursePrice}</span>
            <EnrolledNowItems label={"Instructor"} value={detail.enrolledDetail?.instructor}>
                <FaRegUser />
            </EnrolledNowItems>
            <EnrolledNowItems label={"Duration"} value={detail.enrolledDetail?.duration}>
                <CiClock2 />
            </EnrolledNowItems>
            <EnrolledNowItems label={"Lectures"} value={detail.enrolledDetail?.lectures}>
                <MdOutlineVideoChat />
            </EnrolledNowItems>
            <EnrolledNowItems label={"Level"} value={detail.enrolledDetail?.level}>
                <BsFileBarGraph />
            </EnrolledNowItems>
            <EnrolledNowItems label={"Language"} value={detail.enrolledDetail?.language}>
                <MdLanguage />
            </EnrolledNowItems>
            <EnrolledNowItems label={"Certificate"} value={detail.enrolledDetail?.certificate}>
                <RiFileListLine />
            </EnrolledNowItems>
            <div>
                <Button
                    label={"Enroll now"}
                    className={`${yesevaOne} rounded-full w-full py-4 text-2xl mt-[1.875rem]`}
                />
            </div>
        </div>
    )
}

export default EnrolledNowSection;