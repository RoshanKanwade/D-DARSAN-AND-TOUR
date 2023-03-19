export const isLoggedIn=()=>{
    let data=localStorage.getItem("data");
    if(data!=null)return true;
    else return false;

}

export const doLogin=(data,next)=>{
    localStorage.setItem("data",JSON.stringify(data));
    next()
};

export const doLogout=(next)=>{
    localStorage.removeItem("data");
    next()
}

export const getCurrentDetails=()=>{
    if(isLoggedIn){
    return JSON.parse(localStorage.getItem("data"))
}
else{
    return undefined; 
}
}
export const isAdmin=()=>{
    if(getCurrentDetails()?.role==="Admin"){
    return true;
    }
else{
    return false; 
}
}
export const isHotel=()=>{
    if(getCurrentDetails()?.role==="Hotel_Owner"){
    return true;
    }
else{
    return false; 
}
}
export const isUser=()=>{
    if(getCurrentDetails()?.role==="User"){
    return true;
    }
else{
    return false; 
}
}
export const ByteToImage=({ byteData })=> {
    const imageUrl = URL.createObjectURL(new Blob([byteData]));
  
    return <img src={imageUrl} alt="Image" />;
  }