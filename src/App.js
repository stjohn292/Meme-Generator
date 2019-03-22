import React, { Component } from "react";
import "./App.css";
import ThumbnailPicker from "./ThumbnailPicker";
import MemeInputPanel from "./MemeInputPanel";
import MemePreviewer from "./MemePreviewer";

class App extends Component {
  constructor() {
    super();
    this.state = {     
      topText: "foo",
      bottomText: "Bar",
      selectedImage: "/Images/Baby.jpg",
      images: [
        "/Images/Baby.jpg",
        "/Images/2.jpg",
        "/Images/3.jpg",
        "/Images/HiDog.jpg",
        "/Images/WWKD.png"
      ]
    };
  }

  setImage = image => {
    this.setState({ selectedImage: image });
  };

  addNew = images => {
    const newImage = [...this.state.images, images];
    this.setState({ images: newImage });
  };

  setTopText = text => {
    this.setState({topText: text});
  }

  setBottomText = text => {
    this.setState({bottomText: text});
  }


  render() {
    return (
      <div id="wholePage">
        <ThumbnailPicker
          allImages={this.state.images}
          selectedImage={this.state.selectedImage}
          setImage={this.setImage}
        />
        <MemePreviewer 
          topText = {this.state.topText}
          selectedImage={this.state.selectedImage}
          bottomText = {this.state.bottomText}

        />
        <MemeInputPanel />
        
      </div>
    );
  }
}

export default App;
