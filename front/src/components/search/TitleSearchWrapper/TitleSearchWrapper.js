import React from "react";
import "./TitleSearchWrapper.css";

const TitleSearchWrapper = ({ children }) => (
  <div className="small-search-wrapper">
      <div className="title">청원 목록</div>
      <div className="search-bar">
         {children}
      </div>
  </div>
);

export default TitleSearchWrapper;
