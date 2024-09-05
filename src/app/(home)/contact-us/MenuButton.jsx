'use client';
import React from "react";

const MenuButton = (props) => {
    return(
        <button className={props.className}>{props.children}</button>
    )
}

export default MenuButton;