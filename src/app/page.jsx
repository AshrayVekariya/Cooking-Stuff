// Components
import ContactUsSection from "./(home)/contact-us/ContactUs";
import FeaturedSection from "./(home)/featured-section/FeaturedSection";
import FooterSection from "./(home)/footer/Footer";
import FreeRecipesSection from "./(home)/free-recipes-section/FreeRecipes";
import HealthyTastyRecipesSection from "./(home)/healthy-tasty-recipes-section/HealthyTastyRecipes";
import HeroSection from "./(home)/hero-section/Hero";
import ReadOurPostsSection from "./(home)/read-our-posts-section/ReadOurPosts";
import RecentReviewSection from "./(home)/recent-review-section/RecentReview";
// Google Font
import { Yeseva_One } from 'next/font/google'

const yesevaOne = Yeseva_One({
  weight: '400',
  subsets: ['latin']
})

export default function Home() {
  return (
    <div>
      {/* --------------- Hero Section ------------------------- */}
      <section>
        <HeroSection yesevaOne={yesevaOne} />
      </section>
      {/* --------------- Featured Section --------------------- */}
      <section>
        <FeaturedSection yesevaOne={yesevaOne} />
      </section>
      {/* --------------- Free Recipes Section ----------------- */}
      <section>
        <FreeRecipesSection yesevaOne={yesevaOne} />
      </section>
      {/* --------------- Healthy and Tasty Recipes Section ---- */}
      <section>
        <HealthyTastyRecipesSection yesevaOne={yesevaOne} />
      </section>
      {/* --------------- Read Our Post Section ---------------- */}
      <section>
        <ReadOurPostsSection yesevaOne={yesevaOne} />
      </section>
      {/* --------------- Check Out Recent Review Section ------ */}
      <section>
        <RecentReviewSection yesevaOne={yesevaOne} />
      </section>
      {/* --------------- Conatct us Section ------------------- */}
      <section>
        <ContactUsSection yesevaOne={yesevaOne} />
      </section>
      {/* --------------- Footer Section ------------------- */}
      <section>
        <FooterSection />
      </section>
    </div>
  );
}
