import React, { Component } from "react";

import KeywordWrapper from "../components/keyword/KeywordWrapper";
import KeywordBox from "../components/keyword/KeywordBox";

import MainArticleWrapper from "../components/main/MainArticleWrapper";
import ArticleBox from "../components/article/ArticleBox";


import { TagCloud } from "react-tagcloud";
import { connect } from "react-redux";

import { fetchKeyword } from "../actions/index";

export class KeywordContainer extends Component {
  componentDidMount() {
    this.props.fetchKeyword();
  }

  renderKeyword() {
    return this.props.keywordList;
  }

  renderArticle() {

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


    return this.props.trendArticleList.map(article => {
      return <ArticleBox key={article.id} articleData={article}  articleCategory={category[article.category]}/>;
    });
  }
  
  redirect(tag) {
    this.props.props.history.push(`/search/${tag}`);
  }

  render() {
    const options = {
      luminosity: "dark",
      hue: "blue"
    };



    return (
      <div>
        <KeywordWrapper>
          <KeywordBox>
            <TagCloud
              minSize={15}
              maxSize={60}
              tags={this.renderKeyword()}
              onClick={tag => this.redirect(tag.value)}
              colorOptions={options}
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center"
              }}
            />
          </KeywordBox>
        </KeywordWrapper>
        <MainArticleWrapper>{this.renderArticle()}</MainArticleWrapper>
    
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      keywordList: state.lists.keywordList.keyword,
      trendArticleList: state.lists.keywordList.article
    };
  },
  { fetchKeyword }
)(KeywordContainer);
