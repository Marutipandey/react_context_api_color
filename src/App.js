import React, { Component } from 'react';
import './App.css';
import {CommonContext} from './components/CommonContext.js';
import Main from './components/Main.js';
import Button from './components/Button.js'
class App extends Component {
  constructor() {
    super()

    this.updateColor = (color) => {
      this.setState({
        color: color,
      });
    };
    this.state = {
      color: "green",
      updateColor: this.updateColor,
    };
  }
  render() {
    return (
      <CommonContext.Provider value={this.state}>
        <h1>sdddddddddddddfsss dfssssssssss</h1>
        <main>
          <Main />
          <Button />
        </main>
      </CommonContext.Provider>
    );
  }
}

export default App;
