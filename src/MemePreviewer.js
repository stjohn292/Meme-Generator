import React, { Component } from "react";

class MemePreviewer extends Component {
  render() {
    const { topText, images, bottomText } = this.props;
    
    return (
      <>
        <div id="Preview">
          {/* <span /> */}
          <span>{topText}</span>
          <img src={images} onClick={this.onAdd} />
          <span>{bottomText}</span>
        </div>
      </>
    );
  }
}

export default MemePreviewer;
