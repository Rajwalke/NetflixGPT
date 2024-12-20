/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import app from "../utils/firebase";
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
    return(
        // <div>
     
            <div className="flex items-center justify-between p-5 z-50 w-full absolute bg-gradient-to-b from-gray-950">

                <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="logo-png"
                className="pl-5 w-48 "
                />
                <p  className="cursor-pointer bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition duration-300 " onClick={()=>{
                   nevigatetoForm();
                }}>SignOut</p>
            </div>
        // </div>
    )
}
export default Browser;