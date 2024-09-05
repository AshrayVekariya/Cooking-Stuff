import React from "react";
import ContactUsSection from "../(home)/contact-us/ContactUs";
// Google Font
import { Yeseva_One } from 'next/font/google'

const yesevaOne = Yeseva_One({
  weight: '400',
  subsets: ['latin']
})

const ContactUsPage = () => {
    return (
        <div>
            <ContactUsSection yesevaOne={yesevaOne} />
        </div>
    )
}

export default ContactUsPage;