/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Moviecard from "./Moviecard";


const RecommendationList=({listTile,recomMovieList})=>{
    // console.log("from recommnadtion",recomMovieList);
    if(recomMovieList===null)return 
    return (
        <div className="p-5 relative -top-72">
            <h1 className="text-2xl font-semibold pb-4 text-white">{listTile}</h1>
            <div className="flex overflow-x-auto space-x-4 scrollbar-none hide-scrollbar ">
                {
                    recomMovieList.map((recomMovie)=><Moviecard key={recomMovie?.id} poster_path={recomMovie?.poster_path} info={recomMovie}/>)
                }
                
            </div>
        </div>
    )
}
export default RecommendationList;