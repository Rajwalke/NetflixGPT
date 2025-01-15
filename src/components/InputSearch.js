import { useState } from "react";

/* eslint-disable react/react-in-jsx-scope */
const InputSearch=()=>{
const [searchtext,setSearchtext]=useState("");
    return (
        <div>
            <input type="text"
                value={searchtext}
                   placeholder="Type here..." // Add a placeholder for better UX
                   className="border   p-2 rounded" // Add some basic styling
           onChange={(e)=>{
            setSearchtext(e.target.value);
           }}
           />

        </div>
        
    )
}
export default InputSearch