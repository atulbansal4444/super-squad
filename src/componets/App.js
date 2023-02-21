import React, { Component } from "react";
import CharacterListContainer from "./CharacterList";
import HeroListContainer from "./HerosList";
import OurSquadSetContainer from "./OurSquadSet";

import "../styles/styles.css";
class App extends Component {
  render() {
    return (
      <div className="app">
        <h2>Super Squad</h2>
        <div className="col-md-4">
          <CharacterListContainer />
        </div>
        <div className="col-md-4">
          <HeroListContainer />
        </div>
        <div className="col-md-3">
          <OurSquadSetContainer />
        </div>
      </div>
    );
  }
}

export default App;
