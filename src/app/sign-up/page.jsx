'use client';
import React from "react";
import SignUpImageSection from "./SignUpImageSection";
import SignUpPageForm from "./forms/SignUpForm";
import Link from "next/link";

const SignUpPage = () => {
    return (
        <div className="h-[900px] lg:h-[1054px]">
            <div className="flex">
                <div className="hidden lg:flex">
                    <SignUpImageSection />
                </div>
                <div className="grow">
                    <div className="mt-[112px]">
                        <h1 className="text-center font-semibold text-2xl md:text-4xl lg:text-5xl">Welcome to Jammy</h1>
                    </div>
                    <div className="mx-[20px] md:mx-[70px] lg:mx-[91px] 2xl:mx-[144px]">
                        <SignUpPageForm />
                    </div>
                    <div className="mt-6 text-center text-[18px]">
                        Already have an account? <Link href='' className="text-[#F99106]">Log in</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage;