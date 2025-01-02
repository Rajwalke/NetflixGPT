/* eslint-disable no-unused-vars */
// import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import app from "../utils/firebase";
import { useSelector } from "react-redux";
import { netflix_Logo } from "../utils/constant";
import { useNavigate } from "react-router-dom";
/* eslint-disable react/react-in-jsx-scope */
const Browser=()=>{
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
    const porfileUrl=useSelector((store)=>store.user?.photoURL);
    return(
        // <div>
     
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
        // </div>
    )
}
export default Browser;