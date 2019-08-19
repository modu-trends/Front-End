import React from "react";
import "./SearchWrapper.css";

const SearchWrapper = ({ children }) => (
  <div className="search-wrapper">
    <h2 className="title">대한민국 사용자들의 청원 동향을 살펴보세요</h2>
    <h4 className="sub-title">
      청원 트렌드와 청원에 대한 반대 의사를 표현할 수 있습니다
    </h4>
    {children}
  </div>
);

export default SearchWrapper;
