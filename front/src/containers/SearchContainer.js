import React, { Component } from "react";
<<<<<<< HEAD

=======
>>>>>>> da2995212883cb2e4d9bec7dfb344abe4e000df6
import SearchForm from "../components/search/SearchForm";
import SearchWrapper from "../components/search/SearchWrapper";

import ArticleWrapper from "../components/article/ArticleWrapper";
import ArticleBox from "../components/article/ArticleBox";



export class SearchContainer extends Component {
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
      this.props.props.history.push(`/search/${this.state.value}`);
    }
  }

  render() {
    return (
      <SearchWrapper>
        <SearchForm
          active={this.state.active}
          toggleClass={this.toggleClass}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          value={this.state.value}
        />
      </SearchWrapper>
     
    );
  }
}

export default SearchContainer;
