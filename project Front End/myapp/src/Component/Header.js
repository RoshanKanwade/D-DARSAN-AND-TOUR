import { useEffect } from 'react';
import { NavItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../App.css";
import { getCurrentDetails, isLoggedIn, isAdmin, isUser, isHotel, doLogout } from '../Auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomePage from './HomePage';
import axios from 'axios';
function Header() {
  const state = {
    "states": [
      {"state": "Andhra Pradesh", "districts": ["Anantapu", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool", "Nellore", "Prakasam", "Srikakulam",
          "Visakhapatnam", "Vizianagaram", "West Godavari", "YSR Kadapa"] },{ "state": "Arunachal Pradesh",
        "districts": ["Tawang", "West Kameng", "East Kameng", "Papum Pare", "Kurung Kumey", "Kra Daadi", "Lower Subansiri", "Upper Subansiri",
          "West Siang", "East Siang", "Siang", "Upper Siang", "Lower Siang", "Lower Dibang Valley", "Dibang Valley", "Anjaw",
          "Lohit", "Namsai", "Changlang", "Tirap", "Longding"]},{ "state": "Assam", "districts": ["Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri",
          "Dibrugarh", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup Metropolitan", "Kamrup", "Karbi Anglong", "Karimganj",
          "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Dima Hasao", "Sivasagar", "Sonitpur", "South Salmara-Mankachar", "Tinsukia", "Udalguri", "West Karbi Anglong"]
      },  {"state": "Bihar", "districts": ["Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran (Motihari)", "Gaya",
          "Gopalganj", "Jamui", "Jehanabad", "Kaimur (Bhabua)", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani",
          "Munger (Monghyr)", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia (Purnea)", "Rohtas", "Saharsa", "Samastipur",
          "Saran", "Sheikhpura","Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran"
        ] },{  "state": "Chandigarh (UT)", "districts": [ "Chandigarh"] },{"state": "Chhattisgarh", "districts": ["Balod","Baloda Bazar","Balrampur","Bastar","Bemetara","Bijapur","Bilaspur","Dantewada (South Bastar)","Dhamtari",
          "Durg","Gariyaband","Janjgir-Champa","Jashpur","Kabirdham (Kawardha)","Kanker (North Bastar)","Kondagaon","Korba",
          "Korea (Koriya)","Mahasamund","Mungeli","Narayanpur","Raigarh","Raipur","Rajnandgaon","Sukma","Surajpur  ","Surguja"]
      }, {"state": "Dadra and Nagar Haveli (UT)","districts": ["Dadra & Nagar Haveli"]}, {"state": "Daman and Diu (UT)","districts": ["Daman","Diu" ]}, {"state": "Delhi (NCT)","districts": ["Central Delhi","East Delhi","New Delhi","North Delhi","North East  Delhi","North West  Delhi","Shahdara",
          "South Delhi","South East Delhi","South West  Delhi","West Delhi"] },{"state": "Goa", "districts": [ "North Goa","South Goa"]}, {"state": "Gujarat","districts": [ "Ahmedabad","Amreli","Anand","Aravalli","Banaskantha (Palanpur)","Bharuch","Bhavnagar","Botad",
          "Chhota Udepur","Dahod","Dangs (Ahwa)","Devbhoomi Dwarka","Gandhinagar","Gir Somnath","Jamnagar","Junagadh","Kachchh",
          "Kheda (Nadiad)","Mahisagar","Mehsana","Morbi","Narmada (Rajpipla)","Navsari","Panchmahal (Godhra)","Patan",
          "Porbandar","Rajkot",  "Sabarkantha (Himmatnagar)", "Surat", "Surendranagar", "Tapi (Vyara)", "Vadodara", "Valsad"] }, {"state": "Karnataka","districts": ["Bagalkot",  "Ballari (Bellary)","Belagavi (Belgaum)",  "Bengaluru (Bangalore) Rural",
          "Bengaluru (Bangalore) Urban","Bidar","Chamarajanagar","Chikballapur", "Chikkamagaluru (Chikmagalur)", "Chitradurga",
          "Dakshina Kannada", "Davangere","Dharwad","Gadag","Hassan", "Haveri","Kalaburagi (Gulbarga)","Kodagu",
          "Kolar","Koppal","Mandya", "Mysuru (Mysore)", "Raichur","Ramanagara","Shivamogga (Shimoga)","Tumakuru (Tumkur)",
          "Udupi","Uttara Kannada (Karwar)", "Vijayapura (Bijapur)","Yadgir" ] },{"state": "Kerala", "districts": [ "Alappuzha", "Ernakulam", "Idukki","Kannur","Kasaragod","Kollam","Kottayam", "Kozhikode", "Malappuram","Palakkad", "Pathanamthitta","Thiruvananthapuram",
          "Thrissur","Wayanad"] },{"state": "Lakshadweep (UT)","districts": [ "Agatti","Amini", "Androth", "Bithra","Chethlath","Kavaratti","Kadmath","Kalpeni", "Kilthan","Minicoy"] }, {"state": "Maharashtra","districts": ["Ahmednagar","Akola","Amravati","Aurangabad","Beed",
          "Bhandara", "Buldhana","Chandrapur","Dhule", "Gadchiroli","Gondia", "Hingoli","Jalgaon", "Jalna", "Kolhapur","Latur",
          "Mumbai City","Mumbai Suburban","Nagpur", "Nanded","Nandurbar","Nashik","Osmanabad",
          "Palghar", "Parbhani","Pune","Raigad","Ratnagiri","Sangli","Satara",   "Sindhudurg","Solapur","Thane","Wardha", "Washim", "Yavatmal"
        ] },{"state": "Meghalaya", "districts": ["East Garo Hills", "East Jaintia Hills", "East Khasi Hills","North Garo Hills",  "Ri Bhoi", "South Garo Hills","South West Garo Hills ","South West Khasi Hills","West Garo Hills",
          "West Jaintia Hills", "West Khasi Hills"]  }, { "state": "Mizoram",  "districts": ["Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip" ]
      }, {"state": "Nagaland","districts": ["Dimapur","Kiphire","Kohima","Longleng","Mokokchung","Mon","Peren","Phek","Tuensang","Wokha","Zunheboto" ]  }, {"state": "Odisha", "districts": [ "Angul","Balangir","Balasore","Bargarh","Bhadrak","Boudh","Cuttack","Deogarh","Dhenkanal","Gajapati","Ganjam",
          "Jagatsinghapur","Jajpur","Jharsuguda","Kalahandi","Kandhamal","Kendrapara","Kendujhar (Keonjhar)","Khordha",
          "Koraput","Malkangiri","Mayurbhanj","Nabarangpur","Nayagarh","Nuapada","Puri","Rayagada","Sambalpur",
          "Sonepur","Sundargarh"]  },{"state": "Puducherry (UT)", "districts": ["Karaikal","Mahe","Pondicherry","Yanam" ]
      }, { "state": "Punjab", "districts": [ "Amritsar","Barnala", "Bathinda","Faridkot", "Fatehgarh Sahib","Fazilka", "Ferozepur","Gurdaspur","Hoshiarpur","Jalandhar", "Kapurthala",  "Ludhiana", "Mansa", "Moga", "Muktsar","Nawanshahr (Shahid Bhagat Singh Nagar)","Pathankot","Patiala", "Rupnagar", "Sahibzada Ajit Singh Nagar (Mohali)",
          "Sangrur",  "Tarn Taran" ]  },{"state": "Rajasthan", "districts": [ "Ajmer", "Alwar","Banswara","Baran", "Barmer", "Bharatpur","Bhilwara", "Bikaner", "Bundi",
          "Chittorgarh","Churu","Dausa","Dholpur","Dungarpur","Hanumangarh", "Jaipur","Jaisalmer","Jalore", "Jhalawar","Jhunjhunu"]
      },
      {"state": "Sikkim",
        "districts": ["East Sikkim","North Sikkim","South Sikkim","West Sikkim"]
      },
      {"state": "Tamil Nadu",
        "districts": ["Ariyalur","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kanchipuram","Kanyakumari","Karur",
          "Krishnagiri", "Madurai","Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai","Ramanathapuram","Salem",
          "Sivaganga","Thanjavur","Theni","Thoothukudi (Tuticorin)","Tiruchirappalli","Tirunelveli","Tiruppur","Tiruvallur",
          "Tiruvannamalai","Tiruvarur","Vellore","Viluppuram","Virudhunagar"] },{"state": "Telangana","districts": [   "Adilabad","Bhadradri Kothagudem","Hyderabad", "Jagtial", "Jangaon",  "Jayashankar Bhoopalpally", "Jogulamba Gadwal", "Kamareddy", "Karimnagar", "Khammam" ]}, { "state": "Tripura", "districts": [ "Dhalai","Gomati","Khowai","North Tripura", "Sepahijala", "South Tripura","Unakoti", "West Tripura"]
      }, { "state": "Uttarakhand", "districts": ["Almora", "Bageshwar","Chamoli", "Tehri Garhwal","Udham Singh Nagar", "Uttarkashi" ] },{"state": "West Bengal",
        "districts": ["Alipurduar", "Bankura", "Birbhum", "Burdwan (Bardhaman)", "Cooch Behar",
          "Dakshin Dinajpur (South Dinajpur)", "Darjeeling","Hooghly","Howrah", "Jalpaiguri","Kalimpong",] } ] }
 
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);
  const [Adminrole, setAdminrole] = useState(false);
  const [userrole, setUserrole] = useState(false);
  const [hotelrole, setHotelrole] = useState(false);
  useEffect(() => {
    setLogin(isLoggedIn());
    setUser(getCurrentDetails());
    setAdminrole(isAdmin());
    setUserrole(isUser());
    setHotelrole(isHotel());
  }, [login])
  const Logout = () => {
    doLogout();

  }

  const selectFun=()=> {
    var x =null;
  
   var str="<><form><select id='state' onfocus='this.size=3;' onblur='this.size=1;' onchange='this.size=1; this.blur();'>";
   for (var i=0; i < state.states.length; i++){
     if(state.states.state[i]==x){
      for (var j=0; j < state.states[i].state.length; j++){
       x= state.states[i].districts[j]
     }
    }
  }
    
  

  }
  function BookingHandl(){
    var userid=JSON.parse(localStorage.getItem("data")).id;
    axios.get('http://localhost:8080/D-Darshan/get/bookingdata', {
    params: {
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
  return (<>
    <Navbar className="color-nav" expand="lg" fixed="top"  >
      <Container fluid>
        <Navbar.Brand >
          <img className="logo" src="./Company2.jpg"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', fontSize: "20px" }}
            navbarScroll
          >
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            {
              !hotelrole && (
                <NavDropdown title="My Account" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3"></NavDropdown.Item>

                  <NavDropdown.Item href="/login">
                    Login
                  </NavDropdown.Item>
                </NavDropdown>

              )
            }

            {
              userrole && (
                <NavDropdown title="Support" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action4"></NavDropdown.Item>
                  <NavDropdown.Item onClick={BookingHandl}>Booking Details</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Booking Cancellation</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Refund Details</NavDropdown.Item>
                </NavDropdown>
              )
            }{hotelrole &&(
              <>
              <Nav.Item>
                    <Nav.Link href="/selectTempel" >Add Temple</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/ServiceProvider" >Add Room</Nav.Link>
                  </Nav.Item>
</> 
            ) }
                  

            {
              login && (
                <>

                  <Nav.Item>
                    <Nav.Link href="/" onClick={Logout}>Logout</Nav.Link>
                  </Nav.Item>

                </>

              )
  }
               {
              !user && (
                <Nav.Link href="/Providerlogin">
                  Service Provider
                </Nav.Link>
              )
            }
             {
              !login && (
                <>
                  <Nav.Link href="/AboutUs">
                    About Us
                  </Nav.Link>
                  <Nav.Link href="/FAQ">
                    FAQ
                  </Nav.Link>
                </>
              )
            } 
              
            </Nav>
         
              
              
          <Nav class="d-flex ms-auto order-5"
         
            style={{ maxHeight: '100px', fontSize: "20px" }}
            navbarScroll
          >
             <><form>
              <select id="state" onfocus='this.size=3;' onblur='this.size=1;' onchange='this.size=1; this.blur();'>
                <option value="Places" >Places</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>

              </select>
              <button type="submit" onClick={selectFun}>search</button>
            </form>
            </>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
    <div id="district"></div>

  </>
  );
}

export default Header;