import React, { Component } from "react";
import "./MemePreviewer.css";

class MemePreviewer extends Component {
  // addNew = text => {
  //   fetch("https://localhost:44374/api/values", {
  //     method: "POST",
  //     body: JSON.stringify(text),
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  //   .then( res => {
  //       if (res.ok){
  //         const newMeme = ([...this.state.image, images] +
  //         [...this.state.topText, text] +
  //         [...this.state.bottomText, text]);
  //         this.setState({ meme: newMeme });
  //       }    
  //   })
  //   .catch(err => {
  //     console.error(err);
  //   });  
  // };
  render() {
    const { topText, selectedImage, bottomText } = this.props;

    return (
      <>
        <div id="Preview">
          <span id="topText">{topText}</span>
          <img id="image" src={selectedImage} />
          <span id="bottomText">{bottomText}</span>
        
          
          <input type="meme" value={[ topText, selectedImage, bottomText ]}  onChange={this.onTextChange} />       
          
          <button onClick={this.onAdd}>Add</button>
        </div>
      </>   
    );
  }
}

export default MemePreviewer;
