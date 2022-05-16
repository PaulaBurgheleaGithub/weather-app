import { Component } from "react";
import View from "./View.js";

class Profile {
  constructor(name, location, company, avatar) {
    Object.assign(this, {
      name,
      location,
      company,
      avatar,
    });
  }
}

class App extends Component {
  static API = "https://api.github.com/";
  static ENDPOINT = "users/";
  // static USERNAME = this.state.query;

  state = {
    query: "",
    profile: null,
  };
  render() {
    return (
      <View
        value={this.state.query}
        profile={this.state.profile}
        error={this.state.error}
        onChange={(e) => this.onChange(e)}
        onClick={() => this.profileSearch()}
      />
    );
  }
  profileSearch() {
    const { query } = this.state;

    let req = new XMLHttpRequest();
    req.addEventListener("load", () => {
      if (req.response.error) {
        this.setState({
          query: "",
          profile: null,
          error: true,
        });
        return;
      }
      const { name, location, company, avatar } = req.response;

      this.setState({
        error: false,
        profile: new Profile(name, location, company, avatar),
      });
    });
    console.log(req.response);
    req.open("GET", `${App.API}${App.ENDPOINT}${query}`);
    req.responseType = "json";
    req.send();
  }
  /****for the input*****/
  onChange({ target: { value: query } }) {
    this.setState({
      query,
    });
  }
}

export default App;
