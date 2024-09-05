'use client';
import React, { useState } from "react";
import LogoSection from "./LogoSection";
import CookingStuffMenu from "./CookingStuffMenu";
import OtherMenu from "./OtherMenu";
import { Yeseva_One } from 'next/font/google'

const yesevaOne = Yeseva_One({
    weight: '400',
    subsets: ['latin']
})

const Header = () => {
    const [navToggle, setNavToggle] = useState(false)

    const toggle = () => {
        setNavToggle(!navToggle)
    }

    return (
        <header className={`${yesevaOne.className} bg-white`}>
            <div className="container mx-auto px-4 lg:px-0">
                <div className={`min-h-[6.563rem] flex items-center justify-between flex-wrap ${navToggle ? 'pt-[28px]' : ''}`}>
                    <LogoSection />
                    <div className={`lg:flex ${navToggle ? 'flex w-[100%] order-1' : 'hidden'}`}>
                        <CookingStuffMenu
                            navToggle={navToggle}
                        />
                    </div>
                    <div className={`lg:flex flex gap-4 justify-center md:justify-auto ${navToggle ? 'flex w-[100%] order-1' : 'hidden'}`}>
                        <OtherMenu navToggle={navToggle}/>
                    </div>
                    <button className="lg:hidden" onClick={toggle}>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;