/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { useSelector } from "react-redux";
import useTailor from "../hooks/useTailor";

const Tailor=({id})=>{
    useTailor(id);
   const trailerKey=useSelector((store)=>store.movie.trailor?.key)
    return (
        <div>
            <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+trailerKey} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"allowfullscreen></iframe>
        </div>
    )
}
export default Tailor;