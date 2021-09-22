import React from 'react'

function MoviePoster(props) {
    return (
     <>
        <div className="flex flex-col items-start px-3">
            <div className="h-40">
                <img src={props.src} alt={props.title} className="w-full h-5/6 rounded-full" />
            </div>
            <h3 
            className={`text-lg font-bold ${props.isDark ?  "text-white" : "text-gray-700"}`} >
            {props.title}
            </h3>
            <p 
            className={`text-sm font-bold ${props.isDark ? "text-white" : "text-gray-700"}`}>
                {props.subtitle}
            </p>
        </div>
     </>
    )
}

export default MoviePoster
