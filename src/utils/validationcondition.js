
export const validation=(email,password)=>{
    const isemailvalid=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    const ispasswordvalid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!isemailvalid){
        return "Email is Invalide";
    }
    else if(!ispasswordvalid) {
        return "Password is Invalide (atleast 1 captial letter,symbol and number)";
    }
    return null;
}