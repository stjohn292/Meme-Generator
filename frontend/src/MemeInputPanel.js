import React, { Component } from "react";
import "./MemeInputPanel.css";

class MemeInputPanel extends Component {
  onTopTextChange = event => {
    this.props.setTopText(event.target.value);
  };
  onBottomTextChange = event => {
    this.props.setBottomText(event.target.value);

    addMeme = event => {
      this.props.publishMeme(event.target.value);
    };
  };

  render() {
    const { topText, bottomText } = this.props;
    return (
      <div id="Input">
        {/* <div id="Header">
          <h2>Write your dank text!</h2>
        </div> */}
        <div id="TextBox">
          <p>Top Text:</p>
          <input
            id="TopText"
            type="text"
            value={topText}
            onChange={this.onTopTextChange}
          />
          <p>Bottom Text:</p>
          <input
            id="BottomText"
            type="text"
            value={bottomText}
            onChange={this.onBottomTextChange}
          />
          <input
            id="MemeAdd"
            type="meme"
            value={meme}
            onChange={this.addMeme}
          />
          />
        </div>
      </div>
    );
  }
}

export default MemeInputPanel;
