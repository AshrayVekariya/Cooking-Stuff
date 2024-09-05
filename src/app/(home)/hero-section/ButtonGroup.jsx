'use clent';
import React from "react";

const ButtonGroup = () => {
    return(
        <div className="flex">
            <button className="text-[0.8rem] lg:text-[1.26rem] bg-black text-white py-2 px-4 pointer">Lifetime access</button>
            <button className="text-[0.8rem] lg:text-[1.26rem] bg-[#F99106] text-white py-2 px-4 pointer">Videos</button>
            <button className="text-[0.8rem] lg:text-[1.26rem] bg-[#FAEE21] text-black py-2 px-4 pointer">PDF</button>
        </div>
    )
}

export default ButtonGroup;