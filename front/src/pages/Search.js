import React from "react";
import MainStructure from "../components/structure/MainStructure";
// import KeywordContainer from "../containers/KeywordContainer";
import SearchHeaderContainer from "../containers/SearchHeaderContainer";
import ArticleContainer from "../containers/ArticleContainer";
<<<<<<< HEAD

const Search = props => {
  const {
    params: { keyword }
  } = props.match;

  return (
    <MainStructure>
      <SearchHeaderContainer keyword={keyword} props={props} />
      <ArticleContainer keyword={keyword} />
=======

const Search = () => {
  return ( 
    <MainStructure>
      <SearchHeaderContainer />
      <ArticleContainer />
>>>>>>> da2995212883cb2e4d9bec7dfb344abe4e000df6
    </MainStructure>
  );
};

export default Search;