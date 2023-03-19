import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';

function ServiceProvider() {
  const [image, setImage] = useState(null);
  const[file1,setFile1]=useState(null);
  const handlFile=(e)=>{
setImage(e.target.file[0]);
setFile1(URL.createObjectURL(e.target.file[0]))
  }
 
  
    
      const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append("image", image);
      
        axios.get("http://localhost:8080/D-Darshan/get/addRoom", formData);
      }
     
      
      
      
      
      
      
    
  return (<>
    <Header></Header>
    <div style={{padding:"150px 30px 30px 30px"}}>
    <form onSubmit={handleFileUpload}  >
      <label htmlFor="image">Room Image:</label>
      <input type="file" id="image" name="image" value={image} onChange={handlFile} /><br /><br />

      
      <button type="submit">Add Room</button>
    </form></div>
    </>
  );
}

export default ServiceProvider;
