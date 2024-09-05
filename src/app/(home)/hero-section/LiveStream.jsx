'use client';
import React from "react";
import Image from "next/image";

const LiveStream = () => {
    return (
        <div className="max-w-[5.928rem] h-[2.922rem] relative bg-white rounded-[0.44rem]">
            <button>
                <Image
                    src="/assets/images/home/live.png"
                    alt="Bg-Food-Image"
                    layout={'fill'}
                    objectFit="cover"
                    className="w-[5.928rem] cursor-pointer"
                />
            </button>
        </div>
    )
}

export default LiveStream;