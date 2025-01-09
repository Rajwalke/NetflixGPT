/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useSelector } from "react-redux";
import Tailor from "./Tailor";
import TiltleInfo from "./TiltleInfo";


const MainComponent=()=>{
    // const movieFirst =useSelector((store)=>store.movie?.movieList);
    // if(movieFirst === null) return;
    // const mainMovie=movieFirst[8];

    const movieFirst=useSelector((store)=>store.movie?.showmovie);
    const {id,original_title,overview,poster_path}=movieFirst;
    return(

    <div className="relative bottom-24">
        <TiltleInfo title={original_title} posterPath={poster_path} overview={overview}/>
        <Tailor id={id}/>
    </div>

    );
}
export default MainComponent;
