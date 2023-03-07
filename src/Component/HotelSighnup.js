import { useState } from 'react';
import '../Signup.css';
import { Hotelsignup } from '../Services/LoginService';
function HotelSignupPage(){
const[loginDetail,setLoginDetail]=useState(
    { firsName:"",
lastName:"",
email:"",
mobileNo:"",
licenseNo:"",
    password:""
}
);

const handleChange=(event,feild)=>{
    const Value=event.target.value;
setLoginDetail({
...loginDetail,
[feild]:Value
});
}
 function SignupHandel(){
  var msg=Hotelsignup(loginDetail);
  window.alert(msg);
  }

return(
    <section className="vh-100 bg-image" style={{backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")', position:'relative', top:"100px"}}>
      
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{borderRadius: '15px'}}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                  <form  onSubmit={SignupHandel}>
                    <div className="form-outline mb-4">
                      <input type="text" id="firstName" name="firstName" value={loginDetail.firstName} onChange={(e)=>handleChange(e,'firstName')} className="form-control form-control-lg" placeholder='first Name' required/>
                      <label className="form-label" htmlFor="form3Example1cg">firstName</label>
                    </div>
                    <div className="form-outline mb-4">
                      <input type="text" id="lastName" name="lasstName" value={loginDetail.lastName} onChange={(e)=>handleChange(e,'lastname')} className="form-control form-control-lg" placeholder='last Name' required/>
                      <label className="form-label" htmlFor="form3Example1cg">lasttName</label>
                    </div>
                    <div className="form-outline mb-4">
                      <input type="email" id="email" name='email' value={loginDetail.email} onChange={(e)=>handleChange(e,']email')} className="form-control form-control-lg" placeholder='Email' required />
                      <label className="form-label" htmlFor="form3Example3cg"> Email</label>
                    </div>
                    <div className="form-outline mb-4">
                      <input type="tel" id="mobileNo" name="mobileNo" value={loginDetail.mobileNo} onChange={(e)=>handleChange(e,'mobileNo')} className="form-control form-control-lg" placeholder='Mobile number'required/>
                      <label className="form-label" htmlFor="form3Example3cg">Mobile Number</label>
                    </div>
                    <div className="form-outline mb-4">
                      <input type="text" id="licenseNo" name="licenseNo" value={loginDetail.licenseNo} onChange={(e)=>handleChange(e,'licenseNo')} className="form-control form-control-lg" placeholder='licenseNo'required/>
                      <label className="form-label" htmlFor="form3Example3cg">licenseNo</label>
                    </div>
                    <div className="form-outline mb-4">
                      <input type="password" id="password" name='password' value={loginDetail.password} onChange={(e)=>handleChange(e,'password')} className="form-control form-control-lg"  placeholder='Password'required/>
                      <label className="form-label" htmlFor="form3Example4cg">Password</label>
                    </div>
                    <div className="form-outline mb-4">
                      <input type="password" id="reenter" name='reenter'  className="form-control form-control-lg" placeholder='Re-enter password'required />
                      <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                    </div>                      
                    <div className="d-flex justify-content-center">
                      <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                    </div>
                    <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!" className="fw-bold text-body"><u>Login here</u></a></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</section>
);
}
export default HotelSignupPage;