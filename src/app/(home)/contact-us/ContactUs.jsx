import React from "react";
import Image from "next/image";
import MenuButton from "./MenuButton";
import { IoMdArrowDropright } from "react-icons/io";
import { contactMenu } from "@/app/constants/contactUsMenu";


const ContactUsSection = ({ yesevaOne }) => {
    return (
        <div key={"contact-detail-sec"}>
            <div className="bg-[#FFF2F2]">
                <div className="container mx-auto px-4 lg:px-0 pb-[2.688rem]">
                    <div className="pt-[3.75rem]">
                        <div className={`${yesevaOne.className} text-center`}>
                            <h1 className="text-3xl md:text-4xl lg:text-6xl">Contact Us</h1>
                        </div>
                    </div>
                    <div className="column lg:flex mt-[2.063rem] items-center gap-[5.125rem]">
                        <div>
                            <div className="w-[250px] md:w-[298px] h-[122.6px]">
                                <Image
                                    src="/assets/images/logo/cooking-stuff.svg"
                                    alt="logo"
                                    height={122.6}
                                    width={298}
                                    unoptimized
                                    className="w-[250px] md:w-[298px] cursor-pointer"
                                />
                            </div>
                        </div>
                        <div className="mt-5 lg-mt-0">
                            <p className="text-xl md:text-2xl text-[#00000080]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat nisi tortor tellus sagittis donec id est, dolor, morbi. Id facilisis sem sit maecenas metus, lacinia non. Lorem congue est at ultrices suscipit at nulla neque volutpat. Porta proin hdhhhjff.</p>
                        </div>
                    </div>
                    <div className="mt-[4.688rem] flex gap-y-[2.5rem] md:gap-y-[4.5rem] gap-x-[13.438rem] md:ms-10 flex-wrap">
                        {
                            contactMenu.map((data, index) => {
                                return (
                                    <div key={`menu-${index}`}>
                                        <span className={`${yesevaOne.className} text-3xl border-b pb-[0.625rem] border-[#F99106] ms-3`}>{data.menuLabel}</span>
                                        {
                                            data.menu.length ? <>
                                                {
                                                    data.menu.map((contactMenu, menuIndex) => {
                                                        return (
                                                            <div key={`contactMenu-${menuIndex}`} className="mt-10">
                                                                <MenuButton className="flex items-center text-xl gap-x-5">
                                                                    <IoMdArrowDropright className="text-[#F99106]" size={40} />
                                                                    <span>{contactMenu.menuName}</span>
                                                                </MenuButton>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </> :
                                            <>
                                                <div className="ms-3">
                                                    <span className="mt-10 block text-xl">Phone: <span className="text-[#00000080]">{data.contactInfo.phone}</span></span>
                                                    <span className="mt-8 block text-xl max-w-[12.688rem]">Address: <span className="text-[#00000080]">{data.contactInfo.address}</span></span>
                                                    <span className="mt-8 block text-xl">Email: <span className="text-[#00000080]">{data.contactInfo.email}</span></span>
                                                </div>
                                            </>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUsSection;