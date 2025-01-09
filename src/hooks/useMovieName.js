import { useEffect} from "react";
import { useDispatch } from "react-redux";
import { addMovie, addPopularMovie, addTopRatedMovie } from "../utils/movieSlice";
import { API_option } from "../utils/constant";
const useMovieName=()=>{

    const dispatch=useDispatch()
    const fetchdata=async()=>{
        const [apiData1 ,apiData2, apiData3 ]= await Promise.all([
            fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_option),
            fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_option),
            fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_option)
        ]);
         
        const jsonData1=await apiData1.json();
        const jsonData2=await apiData2.json();
        const jsonData3=await apiData3.json();

        const movieList=jsonData1?.results;
        const topMovieList=jsonData2?.results;
        const popularMovie=jsonData3?.results;
        // console.log("Top Rated Movies",jsonData2?.results);
        // console.log(movieList);
        dispatch(addMovie(movieList));
        dispatch(addTopRatedMovie(topMovieList));
        dispatch(addPopularMovie(popularMovie));

    }

    useEffect(()=>{
         fetchdata();

    },[])

}

export default useMovieName;