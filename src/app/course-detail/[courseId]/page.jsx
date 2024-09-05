import React from "react";
import CourseDetailHeroSection from "./CourseDetailHeroSection";
import CourseDetailSection from "./CourseDetail";
import FreeRecipesSection from "@/app/(home)/free-recipes-section/FreeRecipes";
import ContactUsPage from "@/app/contact-us/page";
import FooterSection from "@/app/(home)/footer/Footer";
import { freeCourseRecipesMenu } from "@/app/constants/freeRecipesMenu";
// Google Font
import { Yeseva_One } from 'next/font/google'

const yesevaOne = Yeseva_One({
    weight: '400',
    subsets: ['latin']
})

const CourseDetailPage = () => {
    return (
        <div>
            {/* -------------- Course Detail Hero Section ------------ */}
            <section>
                <CourseDetailHeroSection yesevaOne={yesevaOne} />
            </section>
            {/* -------------- Course Detail Section ------------ */}
            <section>
                <CourseDetailSection yesevaOne={yesevaOne} />
            </section>
            <div className="bg-[#FFF2F2] min-h-[87px] shadow-[0px_1px_4px_0px_#00000040] flex justify-center items-center">
                <span className={`${yesevaOne.className} text-center block text-xl md:text-[2.5rem]`}>Course Include in this collection</span>
            </div>
            {/* -------------- Course Detail Free Recipes Section ------------ */}
            <section>
                <FreeRecipesSection yesevaOne={yesevaOne} bg={true} freeCourseRecipesMenu={freeCourseRecipesMenu} />
            </section>
            {/* -------------- Contact Us Section ------------ */}
            <section>
                <ContactUsPage yesevaOne={yesevaOne} />
            </section>
            {/* -------------- Footer Section ------------ */}
            <section>
                <FooterSection yesevaOne={yesevaOne} />
            </section>
        </div>
    )
}

export default CourseDetailPage;