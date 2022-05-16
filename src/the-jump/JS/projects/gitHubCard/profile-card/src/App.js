import React, { Component } from "react";
// import Card from "./Components/Card.jsx";
import CardList from "./Components/CardList.jsx";
import Form from "./Components/Form.jsx";
import axios from "axios";

import "./App.css";

const title = (
  <div className="header" style={{ margin: "1rem" }}>
    The GitHub Card App
  </div>
);

class App extends Component {
  state = { profiles: [] };

  addNewProfile = (profileData) => {
    console.log("App", profileData);
    this.setState((prevState) => ({
      profiles: [],
    }));
  };
  render() {
    return (
      <div>
        <div className="header">{title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
