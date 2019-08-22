import React from "react";
import "./NewsBox.css";

const NewsBox = ({children}) => {
    return(
  <div className="news-wrapper">
    <div className="title-box">
      <h2 className="title">관련 뉴스</h2>
    </div>
   {children}
  </div>
  )
};

export default NewsBox;
