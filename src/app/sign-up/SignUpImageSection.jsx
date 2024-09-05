import React from "react";
import Image from "next/image";

const SignUpImageSection = () => {
    return (
        <div className="min-w-[500px] xl:min-w-[658px] 2xl:min-w-[888px] h-[1054px] shadow-[0px_0px_4px_0px_#00000040]">
            <div className="max-w-[305px] flex mx-auto mt-[89px] ">
                <Image
                    src="/assets/images/logo/cooking-stuff.svg"
                    alt="logo"
                    width={305}
                    height={125.47}
                    unoptimized
                    className="w-[305px] cursor-pointer"
                />
            </div>
            <div className="max-w-[562px] flex mx-auto relative mt-[112.53px]">
                <Image
                    src="/assets/images/sign-up/sign-up.svg"
                    alt="sign-up-Background"
                    width={562}
                    height={556}
                    unoptimized
                    className="w-[562px] cursor-pointer"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Image
                        src="/assets/images/sign-up/sign-up-food-dish.png"
                        alt="sign-up-food-dish"
                        width={123}
                        height={133}
                        unoptimized
                        className="w-[123px] cursor-pointer"
                    />
                </div>
            </div>
        </div>
    )
}

export default SignUpImageSection;