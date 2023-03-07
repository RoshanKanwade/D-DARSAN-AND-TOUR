import '../Login.css';
import Header from './Header';
import { hotelLogin } from '../Services/LoginService';
import { doLogin } from '../Auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function HotelLoginPage(){
    const navigate=useNavigate();
    const[loginDetail,setLoginDetail]=useState( 
      { userName:"",
        password:""
    }
    );

    const handleChange=(event,feild)=>{
        const Value=event.target.value;
setLoginDetail({
    ...loginDetail,
    [feild]:Value
});
};

function handleOnSubmit(event){
event.preventDefault();
if(loginDetail.userName.trim()===""){
    window.alert("User Name Required");
    return;
}
if(loginDetail.password.trim()===""){
    window.alert("Password Required");
    return;
}
hotelLogin(loginDetail).then((Data)=>{
    doLogin(Data,()=>{
        window.alert("logged in sucessfully")
            
    navigate("/ServiceProvider")
    });
    
}).catch(error=>{
    if(error.response.status==400)
    window.alert("regerg");
    else 
    window.alert("somthing went wrong");
})



};
    
return(
    <><Header></Header>
    <div class="wrapper">
       
        <div class="text-center mt-4 name">
            D-DARSHAN
        </div>
        <form  onSubmit={handleOnSubmit} class="p-3 mt-3" >
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="userName" id="userName" value={loginDetail.userName} onChange={(e)=>handleChange(e,'userName')} placeholder="Username"/>
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" value={loginDetail.password} onChange={(e)=>handleChange(e,'password')} placeholder="Password"/>
            </div>
            <button type='submit' class="btn mt-3">Login</button>

        </form>
       
        <div class="text-center fs-6">
            <a href="#">Forget password?</a> or <a href="/hotelsighnup">Sign up</a>
        </div>
    </div>
    </>
)
}
export default HotelLoginPage;