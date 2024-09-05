'use client';
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeroCard from "./HeroCard";

const data = [
    {
        bgImg: "bg-[url('/assets/images/home/bg-hero-food.jpg')]",
        isLiveStreamAvailable: true,
        isRecipes: false,
        isCommingSoon: false,
        isDeadline: true,
        isDeadlineWithTime: false,
        isOffer: false,
        cardContentStyle: "py-[6rem] md:py-[4.06rem]",
        recipes: "",
        heading: `<div class="mt-[2.81rem] max-w-[31.188rem]">
                    <h1 class="text-white text-start text-[1.5rem] md:text-[2rem] lg:text-[3.125rem]">Find Your <span class="text-[#FFBF00]">Favorite Food & Make Better</span> Your Cooking</h1>
                 </div>`,
        deadLine: `<div class="mt-[2.81rem]">
                    <h2 class="text-[#D7F315] text-start text-[1.5rem] lg:text-[2.5rem]">10th - 20th May</h2>
                    </div>`,
        deadLineWithTime: ``,
        offer: ``,
    },
    {
        bgImg: "bg-[url('/assets/images/home/bg-hero-drink.jpg')]",
        isLiveStreamAvailable: true,
        isRecipes: true,
        isCommingSoon: false,
        isDeadline: false,
        isDeadlineWithTime: true,
        isOffer: true,
        cardContentStyle: "pt-9",
        recipes: "<span class='text-white text-start text-[1.5rem] lg:text-[2.5rem]'>10+ Recipes</span>",
        heading: `<div class="mt-[0.31rem] max-w-[31.188rem]">
                    <h1 class="text-[#FAEE21] text-start text-[1.5rem] md:text-[2rem] lg:text-[3.125rem]">Variety of Juice <span class="text-white">Workshop</span></h1>
                  </div>`,
        deadLine: ``,
        deadLineWithTime: ` <div class="text-start mt-[0.81rem]">
                                <span class='bg-white rounded-lg text-1xl lg:text-3xl rounded-lg py-[0.56rem] px-6'>6th - 10th June 12:00PM</span>
                            </div>`,
        offer: `<div class="mt-[2.18rem] column text-start lg:flex text-white items-center">
                            <div class="relative">
                                <div class="absolute top-0 left-0 h-[7px] bg-[#FF0000] w-36 lg:w-full rotate-[14.53deg] mt-6"></div>
                                <span class="text-[2.5rem]">&#8377; 5000</span>
                            </div>
                            <span class="text-[1.87rem] block lg:ml-5">&#8377; 500</span>
                            <span class="text-[1.87rem] block lg:ml-2">(Lifetime access)</span>
                        </div>`,
    },
    {
        bgImg: "bg-[url('/assets/images/home/bg-hero-cake.jpg')]",
        isLiveStreamAvailable: false,
        isRecipes: true,
        isCommingSoon: true,
        isDeadline: false,
        isDeadlineWithTime: false,
        isOffer: false,
        cardContentStyle: "pt-[5.37rem]",
        recipes: "<span class='text-[#FA2147] text-[1.5rem] lg:text-[2.5rem]'>10+ Recipes</span>",
        heading: `<div class="max-w-[31.188rem]">
                    <h1 class="text-[#B821FA] text-start text-[1.5rem] md:text-[2rem] lg:text-[3.125rem]">Gaint Strawberry <span class="text-black">Workshop</span></h1></div>`,
        deadLine: ``,
        deadLineWithTime: ``,
        offer: ``,
    }
]

const HeroSection = ({ yesevaOne }) => {
    return (
        <div className={yesevaOne.className}>
            <Carousel
                showArrows={false}
                showIndicators={true}
                infiniteLoop={true}
                dynamicHeight={false}
            >
                {
                    data.map((items) => {
                        return (
                            <HeroCard data={items} />
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default HeroSection;