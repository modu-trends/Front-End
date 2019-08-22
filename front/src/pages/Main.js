import React from "react";

import MainStructure from "../components/structure/MainStructure";

import SearchContainer from "../containers/SearchContainer";
import KeywordContainer from "../containers/KeywordContainer";

import MainWrapper from "../components/main/MainWrapper";

const Main = props => {
  return (
    <MainStructure>
      <SearchContainer props={props} />
      <MainWrapper>
        <KeywordContainer props={props} />
      </MainWrapper>
    </MainStructure>
  );
};

export default Main;
