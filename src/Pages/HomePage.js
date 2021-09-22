import React from 'react'

import EntertainmentCardSlider from '../components/Entertainment/Entertainment'
import PosterSlider from '../components/PosterSlider/PosterSilder.component'
import Premiere from '../components/Premiere/Premiere.component'
import  PremiereImages from '../components/PosterSlider/PremiereImg';
const HomePage = () => {
    return (
     <>
        <div className="flex flex-col gap-10">
        <div  className="container mx-auto px-4">

        <h1 className="text-2xl font-bold text-gray-800 mt-8 mb-2 ml-4 ">
            The Best of Entertainment
        </h1>
        <EntertainmentCardSlider />
       
        </div>

        <div className="bg-navCol-200 py-16">
        <div className="container mx-auto px-4">
            <div className="flex">
                <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="rupay" className="w-full h-full" />

            </div>

             <Premiere />
            </div>

        </div>

        <div className="container mx-auto px-4">
            <PosterSlider
            images={PremiereImages}
            title="Outdoor Events"
            isDark={false}
            />
            </div>
    </div>
     </>
    )
}

export default HomePage
