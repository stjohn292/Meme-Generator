import React, { Component } from "react";
import "./App.css";
import ThumbnailPicker from "./ThumbnailPicker";
import MemeInputPanel from "./MemeInputPanel";
import MemePreviewer from "./MemePreviewer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedImage: "/Images/Baby.jpg",
      images: [
        "/Images/Baby.jpg",
        "/Images/2.jpg",
        "/Images/3.jpg",
        "/Images/HiDog.jpg"
      ]
    };
  }
  render() {
    return (
      <div id="wholePage">
        <ThumbnailPicker
          allImages={this.state.images}
          selectedImage={this.state.selectedImage}
        />
        <MemeInputPanel />
        <MemePreviewer />
      </div>
    );
  }
}

export default App;
