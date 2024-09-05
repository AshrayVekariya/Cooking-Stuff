'use client';
import Link from "next/link";
import React from "react";

const BreadCrumb = ({ crumbs = [] }) => {
    
    return (
        <ul className="flex gap-1">
            {
                crumbs.map((crumb, index) => {
                    return (
                        <li key={index + 1}>
                            <Link href={`/${crumbs.map((e) => e.link).slice(0, index).join('/')}`} className={`font-medium ${crumbs.length - 1 === index ? 'text-[#F99106]' : 'text-black'}`}>{crumb.label}</Link>
                            {(crumbs.length - 1) != index && <>
                                <span className="ms-1">//</span>
                            </>}
                        </li>
                    )
                })
            }
        </ul>
    )

}

export default BreadCrumb;