import React, { Component } from "react";

class MemeInputPanel extends Component {
  render() {
    return (
      <div id="Input">
        <h2>Write your text</h2>
        <label>
          Item:
          <input type="text" />
        </label>
        <button onClick>Add Text</button>
      </div>
    );
  }
}

export default MemeInputPanel;
