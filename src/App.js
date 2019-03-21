import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="wholePage">
        <div id="ImageChooser">
          <h1>Choose an Image</h1>
          <ul>
            <li>
              <img src="/Images/Baby.jpg" />
            </li>
            <li>
              <img src="/Images/2.jpg" />
            </li>

            <li>
              <img src="/Images/3.jpg" />
            </li>
            <li>
              <img src="/Images/RockRainbow.jpg" />
            </li>
          </ul>
        </div>
        <div id="Preview" />
        <div id="Input" />
      </div>
    );
  }
}

export default App;
