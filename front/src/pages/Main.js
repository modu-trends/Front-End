import React from "react";

import MainStructure from "../components/structure/MainStructure";

import SearchContainer from "../containers/SearchContainer";
import KeywordContainer from "../containers/KeywordContainer";

import MainWrapper from "../components/main/MainWrapper";

const Main = props => {
  return (
    <MainStructure>
      <MainWrapper>
        <SearchContainer props={props} />
        <KeywordContainer props={props} />
      </MainWrapper>
    </MainStructure>
  );
};

export default Main;
