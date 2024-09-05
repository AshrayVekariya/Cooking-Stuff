import React from "react";

const EnrolledNowItems = ({label,value,children}) => {
    return (
        <div className="flex justify-between border-b border-[#F99106] py-5">
            <div className="flex gap-5 items-center">
                {children}
                <span className="font-medium text-lg">{label}</span>
            </div>
            <span className="text-lg text-[#00000080]">{value}</span>
        </div>
    )
}

export default EnrolledNowItems;