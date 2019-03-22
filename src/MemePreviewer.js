import React, { Component } from "react";

class MemePreviewer extends Component {
  render() {
    const { images } = this.props;
    return (
      <>
        <div id="Preview">
          <span />
          {/* <span>{topText}</span> */}
          <img src="/Images/3.jpg" onClick={this.onAdd} />
          {/* <span>{bottomText}</span> */}
        </div>
      </>
    );
  }
}

export default MemePreviewer;
