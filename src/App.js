import React, { Component } from "react";
import "./App.css";
import CardList from "./CardList";
import Form from "./Form";
import Axios from "axios";

class App extends Component {
  state = {
    profiles: [],
    addProfiles: ""
  };

  handleSubmit = async event => {
    event.preventDefault();

    const response = await Axios.get(
      `https://api.github.com/users/${this.state.addProfiles}`
    );

    console.log("App", response.data);
    this.setState(prevState => ({
      profiles: [...prevState.profiles, response.data],
      addProfiles: ""
    }));
  };

  handleChange = event => {
    this.setState({
      addProfiles: event.target.value
    });
  };

  render() {
    return (
      <div>
        <header>
          <h1>Github Cards App</h1>
        </header>
        <Form
          addProfiles={this.state.addProfiles}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
