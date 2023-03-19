import { useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { isLoggedIn, isUser } from "../Auth";

function HotelDetails(){
    const navigate=useNavigate();
    useEffect(() => {
       
var x=localStorage.getItem("name");
var Data = axios.get("http://localhost:8080/D-Darshan/get/hotel", {
    params: {
      id: x
    }
  }).then((response)=>response.data);
  

    });

   function handleChang(hotelid,event,roomid){
  
    sessionStorage.setItem("hotelId",hotelid)
    sessionStorage.setItem("amount",event)
    sessionStorage.setItem("RoomId",roomid)
    navigate("/booking")
   }
return(<>
<Header></Header>
     <div style={{padding:"150px 30px 30px 30px"}}>
     <Header></Header>
      <div style={{padding:"150px 30px 30px 30px"}}>
    
<div
  id="carouselMultiItemExample"
  class="carousel slide carousel-dark text-center"
  data-mdb-ride="carousel"
>

  <div class="d-flex justify-content-center mb-4">
    <button
      class="carousel-control-prev position-relative"
      type="button"
      data-mdb-target="#carouselMultiItemExample"
      data-mdb-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next position-relative"
      type="button"
      data-mdb-target="#carouselMultiItemExample"
      data-mdb-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
 
  <div class="carousel-inner py-4">
    
    <div class="carousel-item active">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="card">
              <img
                src="./hotel3.jpg"
                class="card-img-top"
                alt="Waterfall"
              />
              <div class="card-body">
                <h5 class="card-title">Shri Vitthal Rukmini Bhakta Nivas</h5>
                <p class="card-text">
                hotel id:2 Location:Shivaji Chowk Pandharpur contact:9834859931<br></br>
                Dinning:Available <br></br> Facilities:Ac  <br></br>price:11000
                </p>
                <div id="value">
                { isLoggedIn() &&(<button type="button" onClick={()=>{handleChang(2,"11000",1)}} class="btn btn-primary">Book</button>)
                }
                { !isLoggedIn() &&(  <a href="/login" class="btn btn-primary">Book</a>)}
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 d-none d-lg-block">
            <div class="card">
              <img
                src="./hotel1.jpg"
                class="card-img-top"
                alt="Sunset Over the Sea"
                
              />
              <div class="card-body">
                <h5 class="card-title"> Shri Vitthal</h5>
                <p class="card-text">
                hotel id:5 Location:Shivaji Chowk Pandharpur contact:8805047082<br></br>
                Dinning:Available <br></br> Facilities:Ac  <br></br>price:10000
                </p>  
                </div><div id="value">
                { isLoggedIn() &&(<button type="button" onClick={()=>{handleChang(3,"10000",1)}} class="btn btn-primary">Book</button>)}
                { !isLoggedIn() &&(<a href="/login" class="btn btn-primary">Book</a>)}
                </div>
              </div>
              </div>
            </div>
          </div>

       </div>
       </div> 
 </div>
     </div>
     </div>
</>)
}
export default HotelDetails;