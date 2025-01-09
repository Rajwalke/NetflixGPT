/* eslint-disable no-unused-vars */
// import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import app from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useMovieName from "../hooks/useMovieName";
import { netflix_Logo } from "../utils/constant";
import MainComponent from "./MainComponent";
import SecondaryComponent from "./SecondaryComponent";


// import appStore from "../utils/appStore";
/* eslint-disable react/react-in-jsx-scope */
const Browser=()=>{
    // const [mainMovie,setmainMovie]=useState(null);
    const nevigate=useNavigate();
    const nevigatetoForm=()=>{
        const auth = getAuth(app);
         signOut(auth).then(() => {
            nevigate("/");
        // Sign-out successful.
         }).catch((error) => {
         // An error happened.
        });
        
    }
   useMovieName();
  
//    if(movieFirst)return
//    setmainMovie(movieFirst[0]);
//    console.log("From Brwoser MovieFirst",movieFirst);
//    
    
    const porfileUrl=useSelector((store)=>store.user?.photoURL);
    
    return(
        <div className="bg-black">
            
            <div className="flex items-center justify-between p-5 z-50 w-full absolute bg-gradient-to-b from-gray-950">
                <div>
                <img src={netflix_Logo}
                alt="logo-png"
                className="pl-5 w-48 "
                />
                </div>
               
                <div className="flex items-center ">
                <img className="w-14 rounded-full mr-5" alt="user profile" src={porfileUrl}/>
                <p  className="cursor-pointer bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition duration-300 " onClick={()=>{
                   nevigatetoForm();
                }}>SignOut</p>
                </div>
                
            </div>
            
            <MainComponent/>
            <SecondaryComponent/>
         </div>
    )
}
export default Browser;