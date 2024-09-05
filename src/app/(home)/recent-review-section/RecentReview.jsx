import React from "react";
import ReviewCarasoul from "./ReviewCarasoul";

const RecentReviewSection = ({ yesevaOne }) => {
    return (
        <div className="bg-[linear-gradient(to_right_bottom,#ffffffde,#ffffffde),url('/assets/images/recent-review/recent-review-bg.png')] bg-cover bg-center">
            <div className="container mx-auto px-4 lg:px-0">
                <div className="py-[3.75rem]">
                    <div className={`${yesevaOne.className} text-center`}>
                        <h1 className="text-3xl md:text-4xl lg:text-6xl">Check out Recent Review</h1>
                    </div>
                    <div className="text-center mx-auto max-w-[66.188rem] mt-5">
                        <p className="text-[#00000080] text-1xl md:text-2xl lg:text-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan neque pellentesque lorem eu sollicitudin congue ut amet. </p>
                    </div>
                    <div>
                        <ReviewCarasoul />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentReviewSection;