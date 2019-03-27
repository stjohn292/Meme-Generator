import React, { Component } from "react";
import "./App.css";
import ThumbnailPicker from "./ThumbnailPicker";
import MemeInputPanel from "./MemeInputPanel";
import MemePreviewer from "./MemePreviewer";
import MemeListViewer from "./MemeListViewer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      selectedImage: "/Images/Baby.jpg",
      images: [
        "/Images/Baby.jpg",
        "/Images/2.jpg",
        "/Images/WWKD.jpg",
        "/Images/3.jpg",
        "/Images/HiDog.jpg",
        "/Images/Hart.jpg",
        "/Images/Kermit.jpg",
        "/Images/Grandma.jpg",
        "/Images/money.jpg"
      ]
    };
  }

  setImage = image => {
    this.setState({ selectedImage: image });
  };

  setTopText = text => {
    this.setState({ topText: text });
  };

  setBottomText = text => {
    this.setState({ bottomText: text });
  };

  publishMeme = () => {
    const newMeme = {
      topText: this.state.topText,
      selectedImage: this.state.selectedImage,
      bottomText: this.state.bottomText
    };

    fetch("https://localhost:44374/api/values", {
      method: "POST",
      body: JSON.stringify(newMeme),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.ok) {
          alert("it worked");
        }
      })
      .catch(err => {
        console.error(err);
      });
  };
  render() {
    return (
      <div id="wholePage">
        <ThumbnailPicker
          allImages={this.state.images}
          selectedImage={this.state.selectedImage}
          setImage={this.setImage}
        />
        <MemePreviewer
          topText={this.state.topText}
          selectedImage={this.state.selectedImage}
          bottomText={this.state.bottomText}
        />
        <MemeInputPanel
          topText={this.state.topText}
          bottomText={this.state.bottomText}
          setTopText={this.setTopText}
          setBottomText={this.setBottomText}
        />
        <MemeListViewer />
      </div>
    );
  }
}

export default App;
