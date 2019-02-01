import React, { Component } from "react";
import Header from "./header";
import List from "./list";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  render() {
    return (
      <div className="app">
        <Header />
        <List />
      </div>
    );
  }
}

export default App;
