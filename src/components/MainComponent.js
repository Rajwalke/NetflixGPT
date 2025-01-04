/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useSelector } from "react-redux";
import Tailor from "./Tailor";
import TiltleInfo from "./TiltleInfo";


const MainComponent=()=>{
    const movieFirst=useSelector((store)=>store.movie?.movieList);
    if(movieFirst === null) return;
    const mainMovie=movieFirst[0];
    const {id,original_title,overview}=mainMovie;
    // const {id,original_title,overview}=mainmovie;
    // console.log("mainmovie",mainmovie)
    // console.log("id",id);
    // console.log("original_title",original_title);
    // console.log("overview",overview);
    
    return(
    <div className="pt-52 px-14">
        <TiltleInfo title={original_title} overview={overview}/>
        <Tailor id={id}/>
    </div>
    );
}
export default MainComponent;