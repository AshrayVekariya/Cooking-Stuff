'use client';
import React from "react";
import Image from "next/image";
import RatingGroup from "./RatingGroup";
import { FaIndianRupeeSign } from "react-icons/fa6";
import Button from "../buttons/Button";
import { useRouter } from "next/navigation";


const Card = (props) => {
    const router = useRouter();
    const { items, index } = props;
    return (
        <div
            key={`item-${index}`}
            class="w-full min-h-[510px] 2xl:min-h-[610px] rounded-[0.625rem] overflow-hidden shadow-[0px_1px_4px_0px_#00000040] bg-white"
            onClick={() => { router.push(`/course-detail/${items.id}`)}}>
            <div className="w-full h-[249px] 2xl:h-[350px] relative bg-white rounded-[0.62rem]">
                <Image
                    src={items.image}
                    alt={items.itemName}
                    layout={'fill'}
                    objectFit="cover"
                    className="w-full cursor-pointer"
                />
            </div>
            <div class="p-[1.25rem]">
                <div class="font-bold text-[1.625rem] mb-[0.875rem] 2xl:mb-[1.3rem]">{items.itemName}</div>
                <div className="flex items-center gap-x-2 mb-[0.875rem] 2xl:mb-[1.3rem]">
                    <div className="text-2xl text-[#F99106]">{items.rating}</div>
                    <div className="flex gap-x-2">
                        <RatingGroup source={"/assets/icons/favorite-rate.svg"} />
                        <RatingGroup source={"/assets/icons/favorite-rate.svg"} />
                        <RatingGroup source={"/assets/icons/favorite-rate.svg"} />
                        <RatingGroup source={"/assets/icons/favorite-rate.svg"} />
                        <RatingGroup source={"/assets/icons/blank-rate.png"} />
                    </div>
                    <div className="text-2xl text-[#00000080]">{`(${items.ratingPerson})`}</div>
                </div>
                <div className="flex gap-x-5 mb-[0.875rem] 2xl:mb-[1.3rem]">
                    <div className="flex items-center text-3xl gap-x-2">
                        <FaIndianRupeeSign />
                        <span>{items.currentPrice}</span>
                    </div>
                    <del className="flex items-center text-2xl gap-x-2">
                        <FaIndianRupeeSign className="text-[#00000080]" />
                        <span className="text-[#00000080]">{items.price}</span>
                    </del>
                </div>
                {
                    items.course !== "" && (
                        <div>
                            <Button
                                label={items.course}
                                className={'px-6 py-1 rounded-[0.313rem]'}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Card;