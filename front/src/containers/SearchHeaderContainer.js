import React, { Component } from "react";
import SearchForm from "../components/search/SearchForm";
import TitleSearchWrapper from "../components/search/TitleSearchWrapper";

<<<<<<< HEAD
=======

>>>>>>> da2995212883cb2e4d9bec7dfb344abe4e000df6
export class SearchHeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
<<<<<<< HEAD
      value: this.props.keyword
=======
      value: ""
>>>>>>> da2995212883cb2e4d9bec7dfb344abe4e000df6
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
<<<<<<< HEAD
      this.props.props.history.push(`/search/${this.state.value}`);
=======
      const { href } = window.location;
      window.location.href = `${href}search/${this.state.value}`;
>>>>>>> da2995212883cb2e4d9bec7dfb344abe4e000df6
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
<<<<<<< HEAD
      </TitleSearchWrapper>
=======
        </TitleSearchWrapper>
>>>>>>> da2995212883cb2e4d9bec7dfb344abe4e000df6
    );
  }
}

export default SearchHeaderContainer;
