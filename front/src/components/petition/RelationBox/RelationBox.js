import React from "react";
import "./RelationBox.css";

const RelationBox = ({children}) => {
    return(
  <div className="relation-wrapper">
    <div className="title-box">
      <h2 className="title">비슷한 청원들</h2>
    </div>
   {children}
  </div>
  )
};

export default RelationBox;
