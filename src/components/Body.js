/* eslint-disable react/react-in-jsx-scope */
import { background_Img } from "../utils/constant";
import Header from "./Header"
import Login from "./Login"

const Body=()=>{

    return(
        <div className="">
            <Header/>
            
            <Login/>
            <img
            src={background_Img}
            alt="background-img"
            />

        </div>
    )
}
export default Body;