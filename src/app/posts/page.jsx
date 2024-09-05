import React from "react";
import ReadOurPostsSection from "../(home)/read-our-posts-section/ReadOurPosts";
// Google Font
import { Yeseva_One } from 'next/font/google'

const yesevaOne = Yeseva_One({
  weight: '400',
  subsets: ['latin']
})

const PostsPage = () => {
    return (
        <div>
            <ReadOurPostsSection yesevaOne={yesevaOne}/>
        </div>
    )
}

export default PostsPage;