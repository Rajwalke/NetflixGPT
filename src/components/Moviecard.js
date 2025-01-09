/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useDispatch, useSelector } from "react-redux";
import { Poster_URL } from "../utils/constant";
import { addShowMovie } from "../utils/movieSlice";


const Moviecard=({ poster_path,info})=>{
const dispatch=useDispatch();
const showmovie=useSelector((store)=>store.movie?.showmovie);
// console.log("Show Movie",showmovie);
    return (
        <div className="flex-shrink-0 cursor-pointer" 
        onClick={()=>{
            dispatch(addShowMovie(info));
        }}
        >

            <img className="w-auto h-64 object-cover rounded-xl" src={Poster_URL+poster_path} alt="Poster-Img"/>
        
        </div>
    )
}
export default Moviecard;