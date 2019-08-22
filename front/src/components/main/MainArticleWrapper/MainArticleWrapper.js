import React from "react";

import "./MainArticleWrapper.css";

const MainArticleWrapper = ({ children }) => {
  return (
  
      <div className="main-article-wrapper">
        <h5 className="main-title">일주일 인기 청원</h5>
        <div className="main-border"/>
        {children}
      </div>
   
  );
};

export default MainArticleWrapper;
