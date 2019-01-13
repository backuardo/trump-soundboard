import React, { Component } from "react";
import Head from "./Head";
import SoundButton from "./SoundButton";
import githubLogo from "../images/github-logo.png";
import "./App.css";

//import china from "../data/sounds/i_like_china.mp3";
import { sounds } from "../data/sounds";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isSpeaking: false };

    this.startHeadAnimation = this.startHeadAnimation.bind(this);
    this.endHeadAnimation = this.endHeadAnimation.bind(this);
  }

  startHeadAnimation() {
    this.setState({ isSpeaking: true });
  }

  endHeadAnimation() {
    this.setState({ isSpeaking: false });
  }

  render() {
    return (
      <div className="app">
        <Head isSpeaking={this.state.isSpeaking} />
        <div className="sounds">
          <div className="scrollbar">
            {sounds.map(sound => {
              return (
                <SoundButton
                  sound={sound.mp3}
                  desc={sound.desc}
                  startAnimation={this.startHeadAnimation}
                  endAnimation={this.endHeadAnimation}
                  key={sound.desc}
                />
              );
            })}
          </div>
        </div>
        <a href="https://github.com/beneisnr/trump-soundboard">
          <img src={githubLogo} width="50px" alt="github logo" />
        </a>
      </div>
    );
  }
}

export default App;
