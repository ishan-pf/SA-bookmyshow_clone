import MoviePoster from '../Poster/Movie.Poster'
// import settings from "../../config/Poster.Carousal";

import Slider from "react-slick";
import settings from '../../config/castconfig';

const PosterSlider = (props) => {
  return (
    <>
    <div className="flex flex-col items-start py-4">
    <h3 className={
`text-2xl font-bold ${
  props.isDark ? "text-white" : "text-gray-800"
}`
    }>{props.title}</h3>
    <p className={
`text-sm ${
  props.isDark ? "text-white" : "text-gray-800"
}`
    }>{props.subtitle}</p>
    </div>
    <Slider {...settings}>
    {props.images.map((image)=> (
      <MoviePoster {...image} isDark={props.isDark}   />
    ))}
    </Slider>
    </>
  )
}

export default PosterSlider;
