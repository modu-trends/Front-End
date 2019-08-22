import React from "react";

import "./KeywordWrapper.css";

const KeywordWrapper = ({ children }) => {
  return (
  <div className="keyword-wrapper">
    <h5 className="main-title">일주일 인기 키워드</h5>
    <div className="main-border"/>
    {children}
  </div>);
};

export default KeywordWrapper;
