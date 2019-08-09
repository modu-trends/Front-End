import React, { Component } from "react";
import { connect } from "react-redux";
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
    let test_list = {
      contactData: [
        {
          title: "전체",
          data: [
            { num: "1", keyword: "정따라라라 1" },
            { num: "2", keyword: "정따라라라 2" },
            { num: "3", keyword: "정따라라라 3" },
            { num: "4", keyword: "정따라라라 4" },
            { num: "5", keyword: "정따라라라 5" }
          ]
        },
        {
          title: "정치개혁",
          data: [
            { num: "1", keyword: "정따라라라 1" },
            { num: "2", keyword: "정따라라라 2" },
            { num: "3", keyword: "정따라라라 3" },
            { num: "4", keyword: "정따라라라 4" },
            { num: "5", keyword: "정따라라라 5" }
          ]
        },
        {
          title: "외교/통일/국방",
          data: [
            { num: "1", keyword: "정따라라라 1" },
            { num: "2", keyword: "정따라라라 2" },
            { num: "3", keyword: "정따라라라 3" },
            { num: "4", keyword: "정따라라라 4" },
            { num: "5", keyword: "정따라라라 5" }
          ]
        }
      ]
    };
    return (
      <div>
        <KeywordWrapper>
          {test_list.contactData.map((contact, i) => {
            return (
              <KeywordBox title={contact.title} data={contact.data} key={i} />
            );
          })}
        </KeywordWrapper>
        <KeywordWrapper>
          {test_list.contactData.map((contact, i) => {
            return (
              <KeywordBox title={contact.title} data={contact.data} key={i} />
            );
          })}
        </KeywordWrapper>
        <KeywordWrapper>
          {test_list.contactData.map((contact, i) => {
            return (
              <KeywordBox title={contact.title} data={contact.data} key={i} />
            );
          })}
        </KeywordWrapper>
      </div>
    );
  }
}

export default KeywordContainer;
