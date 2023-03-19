import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
  } from "mdb-react-ui-kit";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Payment(){
    const navigate=useNavigate();
    const [cardNumber, setCardNumber] = useState('');
  const [cvc, setCvc] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');

 
  
    useEffect(()=>{
       document.getElementById("amount1").innerHTML= sessionStorage.getItem("amount");
      
    });
    function HandleFun() {
      var checkInDate1= sessionStorage.getItem("checkInDate");
      var checkOutDate1=  sessionStorage.getItem("checkOutDate");
       var Noroom1= sessionStorage.getItem("Noroom");
     var hotelId1=   sessionStorage.getItem("hotelId")
       var RoomId1 = sessionStorage.getItem("RoomId")
        var  amount1= sessionStorage.getItem("amount");
var userid=JSON.parse(localStorage.getItem("data")).id;
window.alert(cardNumber+
cvc+expiration+
cardHolderName);
 axios.get('http://localhost:8080/D-Darshan/booking', {
    params: {
        checkInDate : checkInDate1,
        checkOutDate:checkOutDate1,
        Noroom:Noroom1,
        hotelId:hotelId1,
        RoomId:RoomId1,
        cardNumber:cardNumber,
        cardHolderName:cardHolderName,
amount: amount1,
userId:userid
    }
    } ).then((response)=>{window.alert(response.data);
        navigate("/")
    })
     .
    catch((error)=>{
      console.error(error);
    });

}  
return(
   
    <>
   
   <MDBContainer fluid className="py-5" style={{ backgroundColor: "#eee" }}>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="12" lg="10" xl="8">
          <MDBCard>
            <MDBCardBody className="p-md-5">
              <div>
                <h4>Book your Fav Hotel</h4>
                <p className="text-muted pb-2">
                  Please make the payment to start enjoying all the features of
                  our premium luxurious hotel
                </p>
              </div>
              <div className="px-3 py-4 border border-primary border-2 rounded mt-4 d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <img
                    src="https://i.imgur.com/S17BrTx.webp"
                    className="rounded"
                    width="60"
                  />
                  <div className="d-flex flex-column ms-4">
                    <span className="h5 mb-1">Sponsored with </span>
                    <span className="small text-muted">D-Darshan</span>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <sup className="font-weight-bold text-muted">₹</sup>
                  <span className="h2 mx-1 mb-0"><p id="amount1"></p></span>
                  <span className="text-muted font-weight-bold mt-2">
                     Total
                  </span>
                </div>
              </div>
              <h4 className="mt-5">Payment details</h4>
              <div className="mt-4 d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row align-items-center">
                  <img
                    src="https://i.imgur.com/qHX7vY1.webp"
                    className="rounded"
                    width="70"
                  />
                  <div className="d-flex flex-column ms-3">
                    <span className="h5 mb-1">Credit Card</span>
                    <span className="small text-muted">
                      <MDBInput
                        label="Card Number"
                        id="form1"
                        type="text"
                        placeholder="1234 5678 9012 3457"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                      />
                    </span>
                  </div>
                </div>
                <MDBInput
                  label="CVC"
                  id="form1"
                  type="text"
                  style={{ width: "70px" }}
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                />
              </div>
              <MDBInput
                label="Expiration"
                id="form2"
                type="text"
                placeholder="MM/YYYY"
                value={expiration}
                onChange={(e) => setExpiration(e.target.value)}

                
/>
                  <MDBInput
                    label="Cardholder's Name"
                    id="form2"
                    type="text"
                    value={cardHolderName}
                    placeholder="Cardholder's Name"
                    onChange={(e) => setCardHolderName(e.target.value)}
                  />
                
                  <MDBBtn block size="lg" className="mt-3" onClick={HandleFun}>
                    {" "}
                    Proceed to payment <MDBIcon fas icon="long-arrow-alt-right" />
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      
    </>
)


}
export default Payment;