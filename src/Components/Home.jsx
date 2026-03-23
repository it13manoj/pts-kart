import HomeBanner from "./Banner/HomeBanner"
import RecentPart from "./Banner/Suggession/RecentPage"
import SuggestPart from "./Banner/Suggession/SuggestPart"

import Promotion from "./Layouts/Promotion"
import Featured from "./Banner/Suggession/Featured"
import Countdown from "./Banner/Suggession/Countdown"
import NewItem from "./Banner/Suggession/NewItem"
import Promotion1 from "./Layouts/Promotion1"
import Niche from "./Banner/Suggession/Niche"
import BrandPart from "./Banner/Suggession/BrandPart"
import TestimonialPart from "./Banner/Suggession/TestimonialPart"
import BlogPart from "./Banner/Suggession/BlogPart"
import NewsLetter from "./Banner/Suggession/NewsLetter"
import Intro from "./Banner/Suggession/Intro"
import Footer from "./Banner/Suggession/Footer"
import Checkout from "./Checkout"



import { useState } from "react"

function Home({setValue, getValue}){
    
    return(
        <>
            <HomeBanner />
            {/* <SuggestPart /> */}
            <RecentPart setValue={setValue} getValue={getValue} />
       
          
            

        </>
    )
}

export default Home;