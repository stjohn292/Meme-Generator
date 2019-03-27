import React, { Component } from "react";
import "./MemeListViewer.css";

class MemeListViewer extends Component {
  render() {
    const { allMemes } = this.props; // map memes into an array of MemePreviewer items which will be the MemeListViewer
    return <div>Put Memes Here, please.</div>;
  }
}

export default MemeListViewer;
