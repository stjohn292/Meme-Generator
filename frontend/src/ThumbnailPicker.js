import React, { Component } from "react";
import "./ThumbnailPicker.css";

class ThumbnailPicker extends Component {
  onImageClick = event => {
    const myURL = new URL(event.target.src);
    this.props.setImage(myURL.pathname);
  };

  render() {
    const { allImages, selectedImage, setImage } = this.props;
    const imageListItems = allImages.map(item => {
      const isSelected = selectedImage === item;
      const cssClass = isSelected ? "selected" : "";
      return (
        <li key={item}>
          <img className={cssClass} src={item} onClick={this.onImageClick} />
        </li>
      );
    });

    return (
      <div id="ImageChooser">
        <h1>Choose an Image</h1>
        <ul>{imageListItems}</ul>
      </div>
    );
  }
}

export default ThumbnailPicker;
