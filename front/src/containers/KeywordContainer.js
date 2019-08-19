import React, { Component } from "react";

import KeywordWrapper from "../components/keyword/KeywordWrapper";
import KeywordBox from "../components/keyword/KeywordBox";

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
  redirect(tag) {
    this.props.props.history.push(`/search/${tag}`);
  }

  render() {
    const options = {
      luminosity: "dark",
      hue: "monochrome"
    };

    return (
      <KeywordWrapper>
        <KeywordBox>
          <TagCloud
            minSize={12}
            maxSize={55}
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
    );
  }
}

export default connect(
  state => {
    return {
      keywordList: state.lists.keywordList
    };
  },
  { fetchKeyword }
)(KeywordContainer);
