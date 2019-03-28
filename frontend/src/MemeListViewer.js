import React, { Component } from "react";
import "./MemeListViewer.css";
import { id } from "postcss-selector-parser";

class MemeListViewer extends Component {
  render() {
    const { memes } = this.props;
    const memeList = memes.map(item => (
      <li key={id}>
        {" "}
        <span>{item.topText}</span>
        <img src={item.imagePath} />
        <span>{item.bottomText}</span>
      </li>
    ));
    return (
      <div id="memeList">
        <h1>All Memes</h1>
        <ul>{memeList}</ul>
      </div>
    );
  }
}

export default MemeListViewer;
