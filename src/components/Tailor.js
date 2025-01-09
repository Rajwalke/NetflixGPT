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
    <iframe 
  className="w-full aspect-video" 
  src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&loop=1`} 
  title="YouTube video player" 
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe>

        </div>
    )
}
export default Tailor;