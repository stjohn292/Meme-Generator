import React, { Component } from "react";
import "./MemePreviewer.css";

class MemePreviewer extends Component {
  render() {
    const { topText, selectedImage, bottomText } = this.props;

    return (
      <>
        <div id="Preview">
          <span id="topText">{topText}</span>
          <img id="image" src={selectedImage} />
          <span id="bottomText">{bottomText}</span>

          <input
            type="meme"
            value={[topText, selectedImage, bottomText]}
            onChange={this.onTextChange}
          />

          <button onClick={this.onAdd}>Add</button>
        </div>
      </>
    );
  }
}

export default MemePreviewer;
