/* eslint-disable react/react-in-jsx-scope */
// import Header from "./Header";
import { background_Img} from "../utils/constant";
import GptSearchbar from "./GptSearchbar";
import GptSuggestion from "./GptSuggestion";

const GptPage = () => {
  
  return (
    <div className="">
    <img className="absolute -z-50 " src={background_Img} alt="background image"/>
      <GptSearchbar/>
      <GptSuggestion/>
      </div>

  );
};
export default GptPage;
