import React, { Component } from "react";
import "./MemeListViewer.css";
import { id } from "postcss-selector-parser";

class MemeListViewer extends Component {
  render() {
    const { memes } = this.props; 
    const memeList = memes.map(item => (     
     <div> <span>{item.topText}</span>
      < img src ={item.imagePath} />
      <span>{item.bottomText}</span>
      </div>
  ));
  
    return [memeList];
    
  }
}

export default MemeListViewer;
