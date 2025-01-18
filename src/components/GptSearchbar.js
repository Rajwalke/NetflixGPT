/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */

import { useState } from "react";
import { netflix_Logo } from "../utils/constant";
const GptSearchbar=()=>{
    const [searchtext, setSearchText] = useState("");
    return (
    <div>
        <div className="p-5 z-50 w-full bg-gradient-to-b from-gray-950">
        <img src={netflix_Logo}
            alt="logo-png"
            className="pl-5 w-48 "
        />
        </div>
        <div className="flex justify-center">
             <form className=" rounded-xl bg-black w-1/2 flex justify-center items-center mt-20 text-white">
            <input
              type="text"
              value={searchtext}
              className="block text-xl m-4 bg-white text-black w-9/12 p-2 border-2 border-black rounded-md "
              placeholder="Seach Movie Here"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className="ml-3 w-2/12 cursor-pointer bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition duration-300" >Search</button>
            </form>
        </div>
    </div>
    )
}
export default GptSearchbar;