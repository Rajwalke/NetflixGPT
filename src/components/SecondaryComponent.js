import { useSelector } from "react-redux";
import RecommendationList from "./RecommendationList";
import useRecommendation from "../hooks/useRecommendation";

/* eslint-disable react/react-in-jsx-scope */
const SecondaryComponent=()=>{
    const movieFirst=useSelector((store)=>store.movie?.showmovie);
    const {id}=movieFirst;
    console.log("id for recommantion",id);
    useRecommendation(id);
    const movieList=useSelector((store)=>store.movie.movieList);
    // console.log("From Secondray",movieList);
    const recommandShowMovie=useSelector((store)=>store.movie?.recommendationShow);
    
    const topRatedMovies=useSelector((store)=>store.movie?.topRatedMovie);

    const popularMovies=useSelector((store)=>store.movie?.popularMovie);
    
    return (
        <div className="">
            <RecommendationList listTile={"Rommandtion"} recomMovieList={movieList}/>
            <RecommendationList listTile={"Top-Rated Movies"} recomMovieList={topRatedMovies} />
            <RecommendationList listTile={"Similare Movies"} recomMovieList={recommandShowMovie}/>
            <RecommendationList listTile={"Popular Movies"} recomMovieList={popularMovies}/>
        </div>
    )
}
export default SecondaryComponent;