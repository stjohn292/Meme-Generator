import React, { Component } from "react";

class MemeInputPanel extends Component {
  onTopTextChange = event => {
    this.props.setTopText(event.target.value);
  };
  onBottomTextChange = event => {
    this.props.setBottomText(event.target.value);
  };
 
  render() {
    const {topText, bottomText} = this.props;
    return (
      <div id="Input">
        <h2>Write your text</h2>
                
          <input type="text" value={topText} onChange={this.onTopTextChange} />   
          <input type="text" value={bottomText} onChange={this.onBottomTextChange} />      
  
      </div>
    );
  }
}

export default MemeInputPanel;
