import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "JEFF",
      family: "BZOSS",
    };
    this.mast = {
      name: "SARA",
      family: "LORA"
    };
  }

  render() {
    // this.state = {
    //   name: "GEORGE",
    //   family: "MICHAEL",
    // };
    return <div>Hiiiiiiii {this.mast.name}</div>;
  }
}

export default App;
