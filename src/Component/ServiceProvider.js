import Header from "./Header";
import React, { useState } from 'react';
function ServiceProvider(props){
    
  const [facilities, setFacilities] = useState([]);

  const handleSubmit = (event) => {
    

    setFacilities([]);
  }

  

  const handleFacilityChange = (event) => {
    const facility = event.target.value;
    if (!facilities.includes(facility)) {
      setFacilities([...facilities, facility]);
    }
    window.alert(facilities)
}
 return (<>
  <Header></Header>
     <div style={{padding:"150px 30px 30px 30px"}}>
    <form onSubmit={handleSubmit}>
    <input  type="file" />
      <button className="btn btn-outline-primary">Add image</button>
      <br />
      <label>
        Facilities:
        <select multiple={true} value={facilities} onChange={handleFacilityChange}>
          <option value="wifi">WiFi</option>
          <option value="tv">TV</option>
          <option value="aircon">Air Conditioning</option>
          <option value="parking">Parking</option>
        </select>
      </label>
      <br />
      <button type="submit">Add Room</button>
    </form>
  


       
     <div className="m-3">
      
     
    </div>
     </div>
     </>
    )
}
export default ServiceProvider;