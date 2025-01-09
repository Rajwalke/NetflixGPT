/* eslint-disable react/prop-types */

import { Poster_URL } from "../utils/constant";

/* eslint-disable react/react-in-jsx-scope */
const TiltleInfo=({title,posterPath})=>{
    return (
        <div className="bg-gradient-to-r pl-10 from-black w-full aspect-video flex flex-col items-start justify-center align-middle  absolute text-white">
            
            <img className="w-52 h-52 rounded-full my-4" src={Poster_URL+posterPath} alt="Poster_of movie"/>
            <h1 className="text-5xl font-bold">{title}</h1>
            {/* <p className="px-1 py-4 w-1/4 text-base text-start">{overview}</p> */}
            <div className="flex justify-start cursor-pointer py-4 space-x-2">
            <p className="text-xl py-2 px-6 rounded-md text-black font-semibold bg-white  hover:bg-opacity-50">▷ Play</p>
            <p className="text-xl py-2 px-6 rounded-md text-white font-semibold bg-gray-400 bg-opacity-50"><span className="font-thin">ⓘ</span> More Info</p>
            </div>
            
        </div>
    )
}
export default TiltleInfo;

// image url=https://image.tmdb.org/t/p/w500/euYIwmwkmz95mnXvufEmbL6ovhZ.jpg