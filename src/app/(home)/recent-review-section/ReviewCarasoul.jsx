'use client';
import React from "react";
import { recentReviewData } from "@/app/constants/recentReviewData";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReviewCard from "./ReviewCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 984 },
        items: 3,
        slidesToSlide: 3
    },
    tablet: {
        breakpoint: { max: 984, min: 600 },
        items: 2,
        slidesToSlide: 2
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};

const ReviewCarasoul = () => {
    return (
        <Carousel
            responsive={responsive}
            showDots={true}
            removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        >
            {
                recentReviewData.map((reviewData, reviewIndex) => {
                    return (
                        <div key={reviewIndex} className="my-[5.625rem] mx-2 md:mx-[1.688rem]">
                            <ReviewCard items={reviewData} index={reviewIndex} />
                        </div>
                    )
                })
            }
        </Carousel>
    )
}

export default ReviewCarasoul;