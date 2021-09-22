import React from 'react'
import PlaysFilter from '../components/Cast/PlaysFilter'

import Poster from "../components/Poster/poster.component"
function PlaysPage() {
    return (
       <>

       <div className="container mx-auto px-4 pt-16">
           <div className="w-full lg:flex lg:flex-row-reverse">
            <div className="lg:w-8/12">
           <h2 className="text-2xl font-bold mb-4" >Plays In Kanpur </h2>

            <h4 className="text-red-500 bg-gray-200 w-20 text-center rounded-3xl p-2 my-6 cursor-pointer">Threatre</h4>

           <div className="flex flex-wrap">

            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4 lg:w-1/4">

                <Poster
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-ktzzmvqrht-portrait.jpg"
                    title="Tvk Cultural presents Ponniyin Selvan"
                    subtitle="Tamil ₹300" />


            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">

                <Poster
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314526-vhjdbqsypy-portrait.jpg"
                    title="Tvk Cultural presents Ponniyin Selvan"
                    subtitle="Tamil ₹300" />


            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">

                <Poster
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314929-rernujftzc-portrait.jpg"
                    title="Tvk Cultural presents Ponniyin Selvan"
                    subtitle="Tamil ₹300" />


            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">

                <Poster
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314533-jermladzay-portrait.jpg"
                    title="Tvk Cultural presents Ponniyin Selvan"
                    subtitle="Tamil ₹300" />


            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">

                <Poster
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-ktzzmvqrht-portrait.jpg"
                    title="Tvk Cultural presents Ponniyin Selvan"
                    subtitle="Tamil ₹300" />


            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">

                <Poster
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-ktzzmvqrht-portrait.jpg"
                    title="Tvk Cultural presents Ponniyin Selvan"
                    subtitle="Tamil ₹300" />


            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">

                <Poster
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-ktzzmvqrht-portrait.jpg"
                    title="Tvk Cultural presents Ponniyin Selvan"
                    subtitle="Tamil ₹300" />


            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">

                <Poster
                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-ktzzmvqrht-portrait.jpg"
                    title="Tvk Cultural presents Ponniyin Selvan"
                    subtitle="Tamil ₹300" />


            </div>

           </div>
           
           </div>
           <div className="lg:w-1/4">
        <h2 className="text-2xl font-bold mb-4">Filters</h2>
        <div>
        <PlaysFilter title="Date" tags={["Today", "Tomorrow", "This Weekend"]}/>
        <PlaysFilter title="Language" tags={["Tamil", "Kannada"]}  />
        <PlaysFilter title="Genres" tags={["Drama","Adaptation","Historical","Online Streaming Plays",]}/>
        <PlaysFilter title="More Filters" tags={["Online Streaming","Kids Allowed", "Outdoor Events"]}/>
        <PlaysFilter title="Price" tags={["Free","0-500","501-2000","Above-2000"]}/>
        
        <h2 className="border-red-400 border-2 p-2 rounded-md w-3/4 text-red-500 cursor-pointer text-center">Browse by Venues</h2>
        </div>
       </div>

       </div>
       </div>


       </>
    )
}

export default PlaysPage
