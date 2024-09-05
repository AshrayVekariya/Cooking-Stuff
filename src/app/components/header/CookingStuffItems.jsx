'use client';
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CookingStuffItems = ({label,value,path}) => {
    const pathName = usePathname();
    
    return (
        <Link href={path} className={`p-2.5 ${pathName === path ? "text-[#F99106]" : "text-[#00000080]"}`}>
            <p>{label}</p>
        </Link>
    )
}

export default CookingStuffItems;