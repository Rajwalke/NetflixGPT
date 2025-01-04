/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { API_option } from "../utils/constant";

/* eslint-disable react/react-in-jsx-scope */
const Tailor=({id})=>{
    const [trailerKey,setTrailerKey]=useState(null);
    const fetchdata= async ()=>{
        const apiData=await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_option);
        const jsonData=await apiData.json();
        console.log("Json Data",jsonData);
        const filter=jsonData.results.filter((video)=>video?.type === "Trailer")
        console.log(filter[0]?.key);
        setTrailerKey(filter[0]?.key);
    }   
   useEffect(()=>{
    fetchdata();
   },[])
    return (
        <div>
            <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+trailerKey} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"allowfullscreen></iframe>
        </div>
    )
}
export default Tailor;