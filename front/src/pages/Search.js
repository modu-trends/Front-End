import React from "react";
import MainStructure from "../components/structure/MainStructure";
// import KeywordContainer from "../containers/KeywordContainer";
import SearchHeaderContainer from "../containers/SearchHeaderContainer";
import ArticleContainer from "../containers/ArticleContainer";

const Search = props => {
  const {
    params: { keyword }
  } = props.match;

  return (
    <MainStructure>
      <SearchHeaderContainer keyword={keyword} props={props} />
      <ArticleContainer keyword={keyword} />
    </MainStructure>
  );
};

export default Search;
