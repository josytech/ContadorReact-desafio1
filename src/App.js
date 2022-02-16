import "./styles.css";

import React, { Component } from "react";

class App extends Component {
  state = {
    num: 0
  };

  add = () => {
    if (this.state.num < 10) {
      this.setState({
        num: this.state.num + 1
      });
    }
  };

  remove = () => {
    if (this.state.num > 0) {
      this.setState({
        num: this.state.num - 1
      });
    }
  };
  clear = () => {
    this.setState({
      num: 0
    });
  };

  render() {
    return (
      <div class="container">
        <div class="contador">
          <h1>Contador</h1>
        </div>
        <h2>{this.state.num}</h2>

        <button onClick={this.add}>+</button>
        <button onClick={this.remove}>-</button>
        <button onClick={this.clear}>C</button>
      </div>
    );
  }
}

export default App;
