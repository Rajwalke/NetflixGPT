/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
// import Header from "./Header";
import { background_Img, netflix_Logo } from "../utils/constant";

const GptPage = () => {
  const [searchtext, setSearchText] = useState("");
  return (
    <div className="">
    <img className="absolute -z-50 " src={background_Img} alt="background image"/>
      <div>
      <div className="p-5 z-50 w-full bg-gradient-to-b from-gray-950">
        <img src={netflix_Logo}
                    alt="logo-png"
                    className="pl-5 w-48 "
                    />
      </div>
      <div className="flex justify-center items-center mt-32 text-white">
        <input
          type="text"
          value={searchtext}
          className="block text-xl  bg-black w-1/3 p-2 border-2 border-black rounded-md bg-opacity-35 "
          placeholder="Seach Movie Here"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      </div>
      
     
    </div>
  );
};
export default GptPage;
