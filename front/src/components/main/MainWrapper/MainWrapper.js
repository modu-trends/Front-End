import React from "react";

import "./MainWrapper.css";

const MainWrapper = ({ children }) => {
  return (
    <div className="container">
      <div className="main-wrapper">{children}</div>
    </div>
  );
};

export default MainWrapper;
