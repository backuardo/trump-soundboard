import React from "react";
import "./Head.css";

const Head = props => {
  return (
    <div className={props.isSpeaking ? "speaking head" : "neutral head"}>
      <div className="hair" />
      <div className="mullet" />
      <div className="face">
        <div className="eyes">
          <div className="left-eye">
            <div className="left-pupil" />
          </div>
          <div className="right-eye">
            <div className="right-pupil" />
          </div>
        </div>
        <div className="mouth" />
      </div>
    </div>
  );
};

export default Head;
