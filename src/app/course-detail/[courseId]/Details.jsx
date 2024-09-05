import React from "react";
import { RiArrowRightFill } from "react-icons/ri";

const Details = ({ data }) => {
    return (
        <div className="flex flex-col lg:flex-row lg:flex-wrap">
            {
                data?.map((data, index) => {
                    return (
                        <div key={index} className="flex gap-5 lg:w-2/4 mt-[1.875rem]">
                            <div>
                                <div className="h-[33.33px] w-[33.33px] rounded-full bg-[#F99106] flex items-center justify-center">
                                    <RiArrowRightFill fill="#fff" />
                                </div>
                            </div>
                            <p className="text-2xl">{data}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Details;