import React, { Component } from "react";

import ArticleWrapper from "../components/article/ArticleWrapper";
import ArticleBox from "../components/article/ArticleBox";

import InfiniteScroll from "react-infinite-scroller";

import Loader from "react-loader-spinner";

import axios from "axios";

export class ArticleContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: this.props.keyword,
      hasMore: true,
      article: [],
      loadState: true
    };
  }

  renderArticle(page) {
    if (this.state.loadState) {
      this.setState({ loadState: false });
      axios
        .get(
          "https://www.everytrend.kr/petition/" +
            page +
            "/" +
            this.state.keyword
        )
        .then(response => {
          var newArticle = [];
          var article = this.state.article;

          newArticle = article.concat(response["data"]["data"]);

          this.setState({
            article: newArticle,
            loadState: true
          });
        });
    }
  }

  render() {
    var items = [];

    this.state.article.map((article, i) => {
      console.log(article);
      items.push(<ArticleBox key={article.id} articleData={article} />);
    });

    return (
      <ArticleWrapper>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.renderArticle.bind(this)}
          hasMore={this.state.hasMore}
          loader={
            <Loader type="ThreeDots" color="#00BFFF" height="50" width="50" />
          }
        >
          {items}
        </InfiniteScroll>
      </ArticleWrapper>
    );
  }
}
export default ArticleContainer;
