import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './Component/HomePage';
import Header from './Component/Header';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './Component/LoginPage';
import SignupPage from './Component/Signup';
import HotelLoginPage from './Component/HotelLogin';
import HotelSignupPage from './Component/HotelSighnup';
import HomeTag from './Component/HomeTag';
import AboutUs from './Component/AboutUs';
import Faq from './Component/Faq';
import ServiceProvider from './Component/ServiceProvider';
import HotelDetails from './Component/HotelDetails';
import Temples from './Component/Temple';
import Payment from './Component/Payment';
import RoomBooking from './Component/RoomBooking';
function App() {

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>
function click(){
document.getElementById("user").innerHTML="prashant";
}
  return (<div>
     
    <BrowserRouter>
   
    <Routes>
    <Route exact path="/" element={<HomeTag></HomeTag>}></Route>
        <Route exact path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route exact path="/signup" element={<SignupPage></SignupPage>}></Route>
        <Route exact path="/Providerlogin" element={<HotelLoginPage></HotelLoginPage>}></Route>
        <Route exact path="/hotelsighnup" element={<HotelSignupPage></HotelSignupPage>}></Route>
        <Route exact path="/AboutUs" element={<AboutUs></AboutUs>}></Route>
        <Route exact path="/FAQ" element={<Faq></Faq>}></Route>
        <Route exact path="/ServiceProvider" element={<ServiceProvider></ServiceProvider>}></Route>
        <Route exact path="/HotelDetails" element={<HotelDetails></HotelDetails>}></Route>
        <Route exact path="/selectTempel" element={<Temples></Temples>}></Route>
        <Route exact path="/selectTempelvgv" element={<HomePage></HomePage>}></Route>
        <Route exact path="/Payment" element={<Payment></Payment>}></Route>
        <Route exact path="/booking" element={<RoomBooking></RoomBooking>}></Route>
     </Routes>
     </BrowserRouter>
</div>
  );
}

export default App;
