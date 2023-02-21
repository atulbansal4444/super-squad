import React, { Component } from "react";
import CharacterListContainer from "./CharacterList";
import "../styles/styles.css";
class App extends Component {
  render() {
    return (
      <div className="app">
        <h2>Super Squad</h2>
        <CharacterListContainer />
      </div>
    );
  }
}

export default App;
