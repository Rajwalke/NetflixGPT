import { useEffect } from "react";
import { API_option } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addRecommendation } from "../utils/movieSlice";

const useRecommendation=(id)=>{
    const dispatch=useDispatch();
    const fetchdata=async()=>{
        const apiData=await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`, API_option);
        const jsonData=await apiData.json();
        console.log("Recommnadtionm DAta from userecommandtion",jsonData);
        dispatch(addRecommendation(jsonData?.results))
    }

    useEffect(()=>{
        fetchdata();
    },[id]);
};
export default useRecommendation;