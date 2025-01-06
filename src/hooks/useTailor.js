
import { API_option } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTailor } from "../utils/movieSlice";
import { useEffect } from "react";

const useTailor=(id)=>{
   
    const dispatch=useDispatch();
    const fetchdata= async ()=>{
        const apiData=await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_option);
        const jsonData=await apiData.json();
        console.log("Json Data",jsonData);
        const filter=jsonData.results.filter((video)=>video?.type === "Trailer")
        dispatch(addTailor(filter[0]));
    }   
   useEffect(()=>{
    fetchdata();
   },[])

}
export default useTailor;