import React, { Component } from "react";
import "./SoundButton.css";

class SoundButton extends Component {
  constructor(props) {
    super(props);
    this.state = { isPlaying: this.props.isPlaying };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.startAnimation();
    this.refs.soundRef.play();
  }

  render() {
    return (
      <div className="container">
        <button className="sound-button" onClick={this.handleClick}>
          {this.props.desc}
        </button>
        <audio ref="soundRef" onEnded={this.props.endAnimation}>
          <source src={this.props.sound} type="audio/mp3" />
        </audio>
      </div>
    );
  }
}

export default SoundButton;
