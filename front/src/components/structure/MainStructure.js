import React from "react";
import Header from "./Header";

const MainStructure = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

export default MainStructure;
