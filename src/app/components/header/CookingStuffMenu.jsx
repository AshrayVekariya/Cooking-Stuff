"use client";
import { cookingStuffMenu } from "@/app/constants/menu";
import React from "react";
import CookingStuffItems from "./CookingStuffItems";

const CookingStuffMenu = ({navToggle}) => {
    return (
        <div className={`${navToggle? "block text-center mx-auto" : ""} lg:flex gap-x-10`}>
            {
                cookingStuffMenu.map((menu) => (
                    <CookingStuffItems
                        key={`menu-${menu.label}`}
                        label={menu?.label}
                        value={menu?.value}
                        path={menu?.path}
                    />
                ))
            }
        </div>
    )
}

export default CookingStuffMenu;