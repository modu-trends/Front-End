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
         "/api/petition/"+page +"/" +this.state.keyword
        )
        .then(response => {
          var newArticle = [];
          var article = this.state.article;

          if(response["data"]["status"] == "success"){

            newArticle = article.concat(response["data"]["data"]);

            this.setState({
              article: newArticle,
              loadState: true
            });
          } 
          else{
            this.setState({
              hasMore: false
            });
          }
        });
    }
  }

  render() {
    var items = [];

    this.state.article.map((article, i) => {
    
      const category = {
        "0":"전체",
        "35":"정치개혁",
        "36":"외교/통일/국방",
        "37":"일자리",
        "38":"미래",
        "39":"성장동력",
        "40":"농산어촌",
        "41":"보건복지",
        "42":"육아/교육",
        "43":"안전/환경",
        "44":"저출산/고령화대책",
        "45":"행정",
        "46":"반려동물",
        "47":"교통/건축/국토",
        "48":"경제민주화",
        "49":"인권/성평등",
        "50":"문화/예술/체육/언론",
        "51":"기타"
      }

      items.push(<ArticleBox key={article.id} articleData={article} articleCategory={category[article.category]}/>);
    });

    return (
      <ArticleWrapper>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.renderArticle.bind(this)}
          hasMore={this.state.hasMore}
          loader={
            <Loader type="ThreeDots" width="50" height="50" color="#000" className="loader" />
          }
        >
          {items}
        </InfiniteScroll>
      </ArticleWrapper>
    );
  }
}



export default ArticleContainer;
