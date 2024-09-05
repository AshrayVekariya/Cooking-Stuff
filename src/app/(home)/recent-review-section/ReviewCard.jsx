import React from "react";
import RatingGroup from "@/app/components/card/RatingGroup";
import Image from "next/image";

const ReviewCard = (props) => {
    const { items, index } = props;
    return (
        <div key={`item-${index}`} class="w-full min-h-[27.563rem] rounded-[1.25rem] shadow-[0px_0px_7px_0px_#00000040] bg-white py-10 px-5 gap-[3.375rem]">
            <div className="flex gap-5 items-center">
                <div className="w-[4rem] h-[4rem] md:w-[5.938rem] md:h-[5.938rem] relative overflow-hidden rounded-full">
                    <Image
                        src={items.image}
                        alt={`${items.name}-profile-img`}
                        layout={'fill'}
                        objectFit="cover"
                        className="w-[4rem] md:w-[5.938rem] cursor-pointer"
                    />
                </div>
                <div className="text-start">
                    <span className="block font-medium text-lg md:text-xl lg:text-2xl">{items.name}</span>
                    <span className="text-md md:text-lg text-[#00000080]">{items.role}</span>
                </div>
            </div>
            <div className="mt-10 text-start">
                <div className="font-medium text-lg">{items.reviewLable}</div>
                <div className="my-5">
                    <p className="text-[#00000080] text-lg max-w-[282px]">{items?.reviewDescription}</p>
                </div>
                <div className="flex gap-x-2">
                    <RatingGroup source={"/assets/icons/favorite-rate.svg"} />
                    <RatingGroup source={"/assets/icons/favorite-rate.svg"} />
                    <RatingGroup source={"/assets/icons/favorite-rate.svg"} />
                    <RatingGroup source={"/assets/icons/favorite-rate.svg"} />
                    <RatingGroup source={"/assets/icons/blank-rate.png"} />
                </div>
            </div>
        </div>
    )
}

export default ReviewCard;