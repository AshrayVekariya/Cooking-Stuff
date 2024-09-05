'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../buttons/Button";
import { useRouter } from 'next/navigation';

const OtherMenu = ({navToggle}) => {
    const router = useRouter()
    return (
        <div className={`${navToggle ? 'block text-center' : ''} lg:flex gap-x-5 items-center ml-4`}>
            <div className={`${navToggle ? 'p-2.5 flex justify-center' : ''}`}>
                <Image
                    src="/assets/icons/search.svg"
                    alt="search-icon"
                    width={158}
                    height={65}
                    unoptimized
                    className="w-auto cursor-pointer"
                />
            </div>
            <div className={`${navToggle ? 'p-2.5' : ''}`}>
                <Link href="/sign-in" className="p-2.5 text-[#00000080]">Sign In</Link>
            </div>
            <div className={`${navToggle ? 'p-2.5 pb-5' : ''}`}>
                <Button 
                    label={"Sign Up"}
                    className={"rounded-full w-[9.375rem] md:w-[12.5rem] h-[2.813rem] md:h-[3.75rem]"}
                    onClick={()=>{router.push('/sign-up')}}
                />
            </div>
        </div>
    )
}

export default OtherMenu;