import React from "react";
import Image from "next/image";

const RatingGroup = ({source}) => {
    return (
            <div className="max-w-6">
                <Image
                    src={source}
                    alt="rating"
                    width={24}
                    height={24}
                    unoptimized
                    className="w-6 cursor-pointer"
                />
            </div>
    )
}

export default RatingGroup;