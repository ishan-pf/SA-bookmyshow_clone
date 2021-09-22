import React from 'react'
import Slider from 'react-slick'

import Poster from "../Poster/poster.component"

import  PremiereImages from '../PosterSlider/PremiereImg';

import  settings from "../../config/Poster.Carousel.js"

export const Premiere = () => {

    

    // const PremiereImages = [

    //     {
    //         src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MWsgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00314070-nlljhxsdwq-portrait.jpg",
    //         alt: "Helmet",
    //         title: "Helmet",
    //         subtitle: "English"
    //     },
    //     {
    //         src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzklICAyMGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00117102-gukaentnqs-portrait.jpg",
    //         alt: "Bell Bottom",
    //         title: "Bell Bottom",
    //         subtitle: "English"
    //     },
    //     {
    //         src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137312-qszmhzktyk-portrait.jpg",
    //         alt: "The Secrets We Keep",
    //         title: "The Secrets We Keep",
    //         subtitle: "English"
    //     },
    //     {
    //         src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTI4ayBsaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00056556-zbbswydmwv-portrait.jpg",
    //         alt: "Fast And Farious 9",
    //         title: "Fast And Farious 9",
    //         subtitle: "English"
    //     },
    //     {
    //         src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MWsgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00314070-nlljhxsdwq-portrait.jpg",
    //         alt: "Helmet",
    //         title: "Helmet",
    //         subtitle: "English"
    //     },
    //     {
    //         src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzklICAyMGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00117102-gukaentnqs-portrait.jpg",
    //         alt: "Bell Bottom",
    //         title: "Bell Bottom",
    //         subtitle: "English"
    //     },
    //     {
    //         src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137312-qszmhzktyk-portrait.jpg",
    //         alt: "The Secrets We Keep",
    //         title: "The Secrets We Keep",
    //         subtitle: "English"
    //     },
    //     {
    //         src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTI4ayBsaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00056556-zbbswydmwv-portrait.jpg",
    //         alt: "Fast And Farious 9",
    //         title: "Fast And Farious 9",
    //         subtitle: "English"
    //     },
    //     {
    //         src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MWsgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00314070-nlljhxsdwq-portrait.jpg",
    //         alt: "Helmet",
    //         title: "Helmet",
    //         subtitle: "English"
    //     },
    //     {
    //         src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/another-round-et00309748-26-04-2021-01-07-36.jpg",
    //         alt: "Bell Bottom",
    //         title: "Another Round",
    //         subtitle: "Danish"
    //     },
    //     {
    //         src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137312-qszmhzktyk-portrait.jpg",
    //         alt: "The Secrets We Keep",
    //         title: "The Secrets We Keep",
    //         subtitle: "English"
    //     },
    //     {
    //         src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/proximity-et00302306-13-05-2021-10-06-47.jpg",
    //         alt: "Fast And Farious 9",
    //         title: "Proximity",
    //         subtitle: "English"
    //     },
    //     {
    //         src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-tunnel-et00303783-15-07-2021-10-13-08.jpg",
    //         alt: "The Tunnel",
    //         title: "The Tunnel",
    //         subtitle: "Norweigan"
    //     },
 
    // ]


    return (
    <>
        <div className="flex flex-col items-start py-4 mx-20">
        <h3 className="text-white text-xl font-bold">Premiere</h3>
        <p className="text-white text-sm">Brand new release every Friday</p>
        </div>
        <Slider {...settings} className="mx-16 mr-4">
        {PremiereImages.map((image)=> (
          <Poster {...image} isDark  />
        ))}
        </Slider>
    </>
        );
}

export default  Premiere
