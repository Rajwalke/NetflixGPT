import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../utils/movieSlice";
import { API_option } from "../utils/constant";
const useMovieName=()=>{
    const [op,setop]=useState(null);
    const dispatch=useDispatch()
    const fetchdata=async()=>{
        const apiData = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_option);
        const jsonData=await apiData.json()
        const movieList=jsonData?.results;
        setop(movieList);
        console.log(movieList);
        dispatch(addMovie(movieList));
    }

    useEffect(()=>{
         fetchdata();

    },[])
    return op;
}

export default useMovieName;