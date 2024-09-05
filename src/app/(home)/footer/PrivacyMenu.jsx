'use client';
import Link from "next/link";
import React from "react";

const PrivacyMenu = (props) => {
    return(
        <div key={props.index}>
            <Link href="" className="text-xl">{props.menu.label}</Link>
        </div>
    )
}

export default PrivacyMenu;