import React, { Component } from "react";
import { connect } from "react-redux";

import ArticleWrapper from "../components/article/ArticleWrapper";
import ArticleBox from "../components/article/ArticleBox";

import { fetchArticle } from "../actions/index";

export class ArticleContainer extends Component {
  componentDidMount() {
    this.props.fetchArticle();
  }

  renderArticle() {
    return this.props.articleList.map(article => {
      return <ArticleBox key={article.id} articleData={article} />;
    });
  }

  render() {
    return <ArticleWrapper>{this.renderArticle()}</ArticleWrapper>;
  }
}

export default connect(
  state => {
    return {
      articleList: state.lists.articleList
    };
  },
  { fetchArticle }
)(ArticleContainer);
