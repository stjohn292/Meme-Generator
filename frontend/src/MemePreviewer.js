import React, { Component } from "react";
import "./MemePreviewer.css";

class MemePreviewer extends Component {
  render() {
    const { topText, selectedImage, bottomText } = this.props;

    return (
      <>
        <div id="Preview">
          <h2>Preview Your Meme</h2>
          <span id="topText">{topText}</span>
          <img id="previewImage" src={selectedImage} alt="" />
          <span id="bottomText">{bottomText}</span>
        </div>
      </>
    );
  }
}

export default MemePreviewer;
