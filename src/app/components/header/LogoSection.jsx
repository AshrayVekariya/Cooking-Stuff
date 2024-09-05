import React from "react";
import Image from "next/image";

const LogoSection = () => {
    return (
        <div className="max-w-[9.875rem]">
            <Image
                src="/assets/images/logo/cooking-stuff.svg"
                alt="logo"
                width={158}
                height={65}
                unoptimized
                className="w-[7.5rem] lg:w-[9.875rem] cursor-pointer"
            />
        </div>
    )
}

export default LogoSection;