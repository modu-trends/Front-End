import React from "react";
import MainStructure from "../components/structure/MainStructure";
// import KeywordContainer from "../containers/KeywordContainer";
import SearchHeaderContainer from "../containers/SearchHeaderContainer";
import ArticleContainer from "../containers/ArticleContainer";

const Search = () => {
  return (
    <MainStructure>
      <SearchHeaderContainer />
      <ArticleContainer />
    </MainStructure>
  );
};

export default Search;
