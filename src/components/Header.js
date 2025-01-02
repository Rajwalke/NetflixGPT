/* eslint-disable react/react-in-jsx-scope */
import { netflix_Logo } from "../utils/constant";
const Header=()=>{


    return(
        <div className="p-5 z-50 w-full absolute bg-gradient-to-b from-gray-950">

            <img src={netflix_Logo}
            alt="logo-png"
            className="pl-5 w-48 "
            />

           
        </div>
    )
}
export default Header