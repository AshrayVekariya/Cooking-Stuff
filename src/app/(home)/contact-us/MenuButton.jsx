'use client';
import React from "react";

const MenuButton = (props) => {
    return(
        <button key={"contact-btn"} className={props.className}>{props.children}</button>
    )
}

export default MenuButton;