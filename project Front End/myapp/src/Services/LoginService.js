import axios from "axios"

export const logiUser=(loginDetail)=>{
return axios.post("http://localhost:8080/D-Darshan/auth/signin",loginDetail).then((response)=>response.data);
}

export const hotelLogin=(hotelLoginDetail)=>{
    return axios.post("http://localhost:8080/D-Darshan/auth/hotel/signin",hotelLoginDetail).then((response)=>response.data);
  
}
export const image=()=>{
    return axios.post("http://localhost:8080/D-Darshan/home/sampledata").then((response)=>response.data);
  
}
export const Hotelsignup=(signupDetails)=>{
    return axios.post("http://localhost:8080/D-Darshan/home/register/hotel",signupDetails).then((response)=>response.data);
}
export const SearchHotel=(name)=>{
    return axios.post("http://localhost:8080/D-Darshan/home/search/hotel",name).then((response)=>response.data);
}
export const addRoomWithFile = (formData) => {
    axios.post('http://localhost:8080/D-Darshan/addRoom', JSON.stringify(formData), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log(response);
      alert('Room added successfully!');
    })
    .catch(error => {
      console.error(error);
      alert('Error adding room!');
    });
  }
  
 
  
  
  