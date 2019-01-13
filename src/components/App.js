import React, { Component } from "react";
import Head from "./Head";
import SoundButton from "./SoundButton";
import "./App.css";

//import china from "../data/sounds/i_like_china.mp3";
import { sounds } from "../data/sounds";

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Trump Soundboard</h1>
        <Head isSpeaking />
        <div className="sounds">
          {sounds.map(sound => {
            return (
              <SoundButton
                sound={sound.mp3}
                desc={sound.desc}
                key={sound.desc}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
