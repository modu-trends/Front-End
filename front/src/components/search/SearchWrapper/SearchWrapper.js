import React from "react";
import "./SearchWrapper.css";
import Background from "../../../assets/images/bg.jpg";

// var sectionStyle = {
//   width: "100%",
//   height: "500px",
//   backgroundImage: `url(${Background})`,
//   backgroundSize: "cover"
// };

const SearchWrapper = ({ children }) => (
  <div className="search-wrapper">
    <div className="bg" />
    <div className="content">
      <h2 className="title">
        대한민국 사용자들의 청원 <br />
        동향을 살펴보세요
      </h2>
      <h5 className="sub-title">대한민국 사용자들의 청원 동향을 살펴보세요</h5>
      {children}
    </div>
  </div>
);

export default SearchWrapper;
