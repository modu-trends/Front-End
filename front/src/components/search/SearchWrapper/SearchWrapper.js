import React from "react";
import "./SearchWrapper.css";

const SearchWrapper = ({ children }) => (
  <div className="bg">
    <div className="search-wrapper">
      <div className="content">
        <h2 className="title">
          대한민국 사용자들의 청원 <br />
          동향을 살펴보세요
        </h2>
        <h5 className="sub-title">대한민국 사용자들의 청원 동향을 살펴보세요</h5>
        {children}
      </div>
    </div>
  </div>
);

export default SearchWrapper;
