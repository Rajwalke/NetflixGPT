// import validator from 'validator';

export const validation=(email,password)=>{
    console.log("Email check is",email);
    console.log("password",password);

    // if(!validator.isEmail(email)){
    //     console.log("Email ios not valide")
    //     return "Email is Invalide";
    // }
    // else if(!validator.isStrongPassword(password)){
    //     return "Password is Invalide (atleast 1 captial letter,symbol and number)";
    // }
    const isemailvalid=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(email);
    const ispasswordvalid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    console.log(isemailvalid,ispasswordvalid);
    if(!isemailvalid){
        console.log("Email is Invalide")
        return "Email is Invalide";
    }
    else if(!ispasswordvalid) {
        console.log("Password is Invalide (atleast 1 captial letter,symbol and number)")
        return "Password is Invalide (atleast 1 captial letter,symbol and number)";
    }
    return null;
}