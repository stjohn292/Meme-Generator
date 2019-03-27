import React, { Component } from "react";
import "./MemeInputPanel.css";

class MemeInputPanel extends Component {
  onTopTextChange = event => {
    this.props.setTopText(event.target.value);
  };
  onBottomTextChange = event => {
    this.props.setBottomText(event.target.value);
  };

  addMeme = event => {
    this.props.publishMeme(event.target.value);
  };

  render() {
    const { topText, bottomText } = this.props;
    return (
      <div id="Input">
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
        </div>
        <button onClick={this.addMeme}>Add Your Meme</button>
      </div>
    );
  }
}

export default MemeInputPanel;
