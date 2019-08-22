import React from "react";
import "./SearchWrapper.css";
import Background from "../../../assets/images/bg.png"



var sectionStyle = {
  width: "100%",
  height: "500px",
  backgroundImage: `url(${Background})`,
  backgroundSize:"cover",
  backgroundPosition: "0 220px",
  overflow: 'hidden',
  backgroundRepeat  : 'no-repeat',
};


const SearchWrapper = ({ children }) => (
  <div style={ sectionStyle }>
    <div className="search-wrapper" >
      <h2 className="title">대한민국 사용자들의 청원 동향을 살펴보세요</h2>
      <h4 className="sub-title">
        청원 트렌드와 청원에 대한 관련 뉴스, 반대 의사를 표현할 수 있습니다
      </h4>
      {children}
    </div>
  </div>
);

export default SearchWrapper;
