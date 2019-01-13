import React, { Component } from "react";
import Head from "./Head";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Trump Soundboard</h1>
        <Head isSpeaking />
      </div>
    );
  }
}

export default App;
