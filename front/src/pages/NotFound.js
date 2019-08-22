import React from "react";
import MainStructure from "../components/structure/MainStructure";

var notfoundStyle = {
  width:"100%",
  height:"100%",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  alignContent:"center",
  flexDirection:"column",
  position:"fixed",
  
};

var title = {
  fontWeight:300,
  margin:"0 0 5px 0"
}

var subTitle = {
  fontWeight:300
}

const NotFound = () => {
  return (
    
        <div  style={notfoundStyle}>
          <h1 style={title}>404 Not Found</h1>
          <p style={subTitle}>해당 페이지를 찾을 수 없습니다</p>
        </div>
     
  );
};

export default NotFound;
