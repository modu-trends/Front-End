import React, { Component } from "react";
import SearchForm from "../components/search/SearchForm";
import TitleSearchWrapper from "../components/search/TitleSearchWrapper";

export class SearchHeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      value: this.props.keyword
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
      window.location.reload();
    }
  }

  render() {
    return (
      <TitleSearchWrapper>
        <SearchForm
          active={this.state.active}
          toggleClass={this.toggleClass}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          value={this.state.value}
        />
      </TitleSearchWrapper>
    );
  }
}

export default SearchHeaderContainer;
