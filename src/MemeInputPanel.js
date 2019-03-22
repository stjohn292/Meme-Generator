import React, { Component } from "react";
import "./MemeInputPanel.css";

class MemeInputPanel extends Component {
  onTopTextChange = event => {
    this.props.setTopText(event.target.value);
  };
  onBottomTextChange = event => {
    this.props.setBottomText(event.target.value);
  };

  render() {
    const { topText, bottomText } = this.props;
    return (
      <div id="Input">
        <div id="Header">
          <h2>Write your dank text!</h2>
        </div>
        <div id="TextBox">
          <p>This goes on top:</p>
          <input
            id="TopText"
            type="text"
            value={topText}
            onChange={this.onTopTextChange}
          />
          <p>This goes on the bottom:</p>
          <input
            id="BottomText"
            type="text"
            value={bottomText}
            onChange={this.onBottomTextChange}
          />
        </div>
      </div>
    );
  }
}

export default MemeInputPanel;
