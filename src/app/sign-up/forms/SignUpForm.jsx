'use client'
import Button from "@/app/components/buttons/Button";
import InputField from "@/app/components/input/InputField";
import React from "react";

const SignUpPageForm = () => {
    return (
        <div>
            <form>
                <div className="mt-[36px]">
                    <InputField
                        label={"Full Name"}
                        placeholder="John Doe"
                        type={"text"}
                        onChange={() => { }} />
                </div>
                <div className="mt-[36px]">
                    <InputField
                        label={"Email"}
                        placeholder="Enter your Email here"
                        type={"email"}
                        onChange={() => { }} />
                </div>
                <div className="mt-[36px]">
                    <InputField
                        label={"Password"}
                        placeholder="Enter your Password"
                        type={"Password"}
                        onChange={() => { }} />
                </div>
                <div className="mt-[36px] flex justify-center">
                    <Button 
                        label={"Create Account"}
                        className={"w-[200px] md:w-[300px] h-[60px] text-[20px] md:text-[26px] font-medium"}
                    />
                </div>
            </form>
        </div>
    )
}

export default SignUpPageForm;