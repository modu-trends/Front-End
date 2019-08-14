import React, { Component } from "react";
import KeywordWrapper from "../components/keyword/KeywordWrapper";
import KeywordBox from "../components/keyword/KeywordBox";

export class KeywordContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  render() {
    return (
      <KeywordWrapper>
        <KeywordBox />
      </KeywordWrapper>
    );
  }
}

export default KeywordContainer;
