'use client'
import React from "react";

const Button = (props) => {
    return (
        <button className={`bg-[#F99106] text-white ${props?.className}`} onClick={props.onClick}>
            <span>{props?.label}</span>
            {props.children}
        </button>
    )
}

export default Button;