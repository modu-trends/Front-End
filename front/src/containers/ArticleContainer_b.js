import React, { Component } from "react";
import { connect } from "react-redux";

import ArticleWrapper from "../components/article/ArticleWrapper";
import ArticleBox from "../components/article/ArticleBox";

import { fetchArticle } from "../actions/index";

import InfiniteScroll from "react-infinite-scroller";

import Loader from "react-loader-spinner";

export class ArticleContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: this.props.keyword,
      hasMore: true,
      article: []
    };
  }

  componentDidMount() {
    this.props.fetchArticle(this.state.keyword);
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
