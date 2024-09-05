import React from "react";
import Card from "@/app/components/card/Card";
import Button from "@/app/components/buttons/Button";
import { FaArrowRight } from "react-icons/fa6";
import { healthyTastyRecipesMenu } from "@/app/constants/healthyTastyRecipesMenu";

const HealthyTastyRecipesSection = ({yesevaOne}) => {
    return (
        <div className="bg-[linear-gradient(to_right_bottom,#ffffffde,#ffffffde),url('/assets/images/healthy-and-tasty/bg-healthy.png')] bg-cover bg-center">
            <div className="container mx-auto px-4 lg:px-0">
                <div className="py-[3.75rem]">
                    <div className={`${yesevaOne.className} text-center`}>
                        <h1 className="text-3xl md:text-4xl lg:text-6xl">Healthy & Tasty Recipes</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20 mt-[3.12rem]">
                        {
                            healthyTastyRecipesMenu.map((item, index) => {
                                return (
                                    <Card items={item} index={index} />
                                )
                            })
                        }
                    </div>
                    <div className="flex justify-center mt-[3.12rem]">
                        <Button
                            label={"View All"}
                            className={'p-[0.938rem] rounded-[0.625rem] flex gap-x-5 items-center text-3xl shadow-[0px_0px_20px_0px_#00000040]'}
                        >
                            <FaArrowRight className="text-2xl" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HealthyTastyRecipesSection;