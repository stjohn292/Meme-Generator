import React, { Component } from "react";

class MemeInputPanel extends Component {
  onAdd = () => {
    this.props.addNew(this.props.text);
    this.props.setText("");
  };

  // onTextChange = event => {
  //   this.props.setText(event.target.value);
  // };

  render() {
    return (
      <div id="Input">
        <h2>Write your text</h2>
        <label>
          {/* Item:
          <input type="text" value={text} onChange={this.onTextChange} /> */}
        </label>
        <button>Add Text</button>
      </div>
    );
  }
}

export default MemeInputPanel;
