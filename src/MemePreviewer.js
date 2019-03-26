import React, { Component } from "react";

class MemePreviewer extends Component {
  render() {
    const { topText, selectedImage , bottomText } = this.props;
    
    return (
      <>
        <div className="Preview">
          <span>{topText}</span>
          <img src={selectedImage} />
          <span>{bottomText}</span>
        </div>
      </>
    );
  }
}

export default MemePreviewer;
