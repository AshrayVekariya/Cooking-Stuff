'use client';
import React from "react";
import Image from "next/image";

const Posts = (props) => {
    const { items, index, yesevaOne } = props;
    return (
        <div key={`item-${index}`} class="w-full min-h-[35.563rem] 2xl:min-h-[38.125rem]">
            <div className="w-full h-[14.938rem] 2xl:h-[21.875rem] relative rounded-tl-[30px] rounded-br-[30px] overflow-hidden">
                <Image
                    src={items.image}
                    alt={items.itemName}
                    layout={'fill'}
                    objectFit="cover"
                    className="w-full cursor-pointer"
                />
            </div>
            <div class="mt-10">
                <div class="font-bold text-[1.75rem]">{items.itemName}</div>
            </div>
            <div class="mt-1">
                <div className="column xl:flex gap-3">
                    <div class="text-xl text-[#00000080]">{items.date}</div>
                    <div class="text-xl text-[#00000080]">{items.comments}</div>
                </div>
            </div>
            <div class="mt-[0.625rem]">
                <p className="text-lg">{items.summary}</p>
            </div>
            <div className={`${yesevaOne.className} mt-5`}>
                <button className="text-xl text-[#F99106]">{items.readMore}</button>
            </div>
        </div>
    )
}

export default Posts;