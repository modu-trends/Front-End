import React from "react";
import MainStructure from "../components/structure/MainStructure";
// import KeywordContainer from "../containers/KeywordContainer";
import SearchContainer from "../containers/SearchContainer";
import ArticleContainer from "../containers/ArticleContainer";

const Search = () => {
  return ( 
    <MainStructure >
      <SearchContainer />
      <ArticleContainer />
    </MainStructure>
  );
};

export default Search;