import React from "react";
import MainStructure from "../components/structure/MainStructure";
import KeywordContainer from "../containers/KeywordContainer";
import SearchContainer from "../containers/SearchContainer";

const Main = () => {
  return (
    <MainStructure>
      <SearchContainer />
      <KeywordContainer />
    </MainStructure>
  );
};

export default Main;
