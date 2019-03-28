import React, { Component } from "react";
import "./MemeListViewer.css";
import { id } from "postcss-selector-parser";

class MemeListViewer extends Component {
  render() {
    const { memes } = this.props;
    const memeList = memes.map(item => (
      <li key={id}>
      
        <div id="listItemContainer">
          <span id="listTopText">{item.topText}</span>
          <img id="listImage" src={item.imagePath} />
          <span id="listBottomText">{item.bottomText}</span>
        </div>
      </li>
    ));
    return (
      <div id="memeList">
        <h1>Meme List</h1>
        <ul>{memeList}</ul>
      </div>
    );
  }
}

export default MemeListViewer;
