/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
// import userEvent from "@testing-library/user-event";
import { useRef, useState } from "react";
import { validation } from "../utils/validationcondition.js";
import app from "../utils/firebase.js";
// import { useDispatch } from "react-redux";
// import { addUser } from "../utils/userSlice.js";
import { getAuth,signInWithPopup,GoogleAuthProvider , createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from "react-router-dom";
// import { googleURL } from "../utils/image.js";
// import { auth } from "../utils/firebase.js";
const Form=()=>{
    // const dispatchItem=useDispatch(null);
    const [newuser,setnewuser]=useState(true);
    const [username,setusername]=useState("");
    const navigate=useNavigate();
    // const [email,setemail]=useState("");
    // const [password,setpassword]=useState("");
    const [mobileno,setmobileno]=useState("")
    const [validationMessage,setvalidationMessage]=useState(null);
    const email=useRef(null);
    const password=useRef(null);

    
    const googlevaildation=()=>{
        const provider = new GoogleAuthProvider();

        // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        const auth = getAuth(app);
        signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            setvalidationMessage("Validation with google")
            navigate("/browser")
            // IdP data available using getAdditionalUserInfo(result)
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
          
    
    }
    const checktheValidity=()=>{
        console.log("email is",email.current.value);
        console.log("password is",password.current.value);

        const message=validation(email.current.value,password.current.value);
        console.log(message)
        setvalidationMessage(message);
        if(validationMessage) return;
        
        if(newuser){
            // sign up logic
            console.log("Im not in error")
             const auth = getAuth(app);
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
              .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                // dispatchItem(addUser({uid:user.uid, email:user.email,apiKey:user.apiKey}));
                navigate("/browser");
                console.log("naviagte to the browser");
                // ...
              })
              .catch((error) => {
                console.log("im in eror")
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode+" - "+errorMessage);
                if(errorCode==="auth/email-already-in-use"){
                    setvalidationMessage("Create account with another email..this email-already-in-use")
                }
              });
        }
        else{
            // sign in logic
        
            const auth = getAuth(app);
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("user",user);
                setvalidationMessage("user")
                // dispatchItem(addUser(user));
                navigate("/browser")
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                if(errorCode){
                    setvalidationMessage("email or password is incorrect");
                }
                // else if(error.code === "auth/user-not-found"){
                //     setvalidationMessage()
                // }
                
              });

        }
    }
    return(
        <>

        <div className="absolute my-44 w-3/12 mx-auto right-0 left-0 ">
    
            <form onSubmit={(e)=>{e.preventDefault()}} className="flex flex-col  bg-black bg-opacity-90 px-16 py-8 items-center rounded-md">
                <p className="text-white text-xl p-2  font-bold">
                    {newuser===true?" New User Signpup":"SingIn"}
                </p>
                {newuser === true && <input className="m-4  bg-gray-900 text-white rounded-md p-2 w-full block" value={username} type="text" placeholder="Enter Full Name"
                onChange={(e)=>{
                    setusername(e.target.value)
                }}
                /> }
                {newuser === true && <input className="m-4  bg-gray-900 text-white rounded-md p-2 w-full block" value={mobileno} type="number" placeholder="Enter your mobile Number"
                onChange={(e)=>{
                    setmobileno(e.target.value)
                }}
                />}
                <input className="m-4   bg-gray-900 text-white rounded-md p-2 w-full block" type="email" placeholder="Enter your Email"
                ref={email}
                // onChange={(e)=>{
                //     setemail(e.target.value)
                // }}
                />
                <input className="m-4   bg-gray-900 text-white rounded-md p-2 w-full block"  type="password"  placeholder="Enter your Password"
                ref={password}
                // onChange={(e)=>setpassword(e.target.value)}
                />

                <p className="font-semibold text-xl text-red-500 my-2">{validationMessage}</p>
                

                <p className="text-sm text-white text-start cursor-pointer"
                onClick={()=>{
                    googlevaildation();
                }}
                >Signup with google</p>
                <button className="m-4 font-bold text-white rounded-md p-2 w-full  bg-red-800 "
                onClick={()=>{
                    
                    checktheValidity();
                }}
                >{newuser===true?"Signup": "SignIn"}</button>

                <p className="text-white my-3">
                    {newuser===false?"New to Netflix?":"Already User?" }
                    <span className="cursor-pointer underline font-semibold"
                     onClick={()=>{
                        newuser===true?setnewuser(false):setnewuser(true);
                       
                        //setnewuser(!newuser) if newuser is true then it set to the false if it is false then set to the true
                    }} >
                
                    {newuser===true?" SignIn Now": " SignUp Now "}
                    </span> 
                </p>
            </form>
        </div>
        </>
    )
}
export default Form;