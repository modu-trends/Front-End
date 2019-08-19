import React, { Component } from "react";

import MainWrapper from "../components/main/MainWrapper";

import SearchForm from "../components/search/SearchForm";
import SearchWrapper from "../components/search/SearchWrapper";

import KeywordWrapper from "../components/keyword/KeywordWrapper";
import KeywordBox from "../components/keyword/KeywordBox";

import { TagCloud } from "react-tagcloud";
import { connect } from "react-redux";

import { fetchKeyword } from "../actions/index";

export class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      value: ""
    };

    this.toggleClass = this.toggleClass.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchKeyword();
  }

  /* Toggle Button */
  toggleClass() {
    const currentState = this.state.active;
    this.setState({
      active: !currentState
    });
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(e) {
    if (e.key === "Enter") {
      const { href } = window.location;
      window.location.href = `${href}search/${this.state.value}`;
    }
  }

  renderKeyword() {
    return this.props.keywordList;
  }

  render() {
    const options = {
      luminosity: "dark",
      hue: "monochrome"
    };

    return (
      <MainWrapper>
        <SearchWrapper>
          <SearchForm
            active={this.state.active}
            toggleClass={this.toggleClass}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            value={this.state.value}
          />
        </SearchWrapper>
        <KeywordWrapper>
          <KeywordBox>
            <TagCloud
              minSize={12}
              maxSize={55}
              tags={this.renderKeyword()}
              onClick={tag => alert(`'${tag.value}' was selected!`)}
              colorOptions={options}
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center"
              }}
            />
          </KeywordBox>
        </KeywordWrapper>
      </MainWrapper>
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
)(MainContainer);
