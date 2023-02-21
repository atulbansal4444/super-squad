import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getHeros } from "../selectors/heroSelectors";

const OurSquadSet = ({ herosList }) => {
  const strength = () => {
    let strength = 0;
    herosList.forEach(hero => {
      strength = strength + hero.strength;
    });
    return strength;
  }

  const intelligence = () => {
    let intelligence = 0;
    herosList.forEach(hero => {
      intelligence = intelligence + hero.intelligence;
    });
    return intelligence;
  }

  const speed = () => {
    let speed = 0;
    herosList.forEach(hero => {
      speed = speed + hero.speed;
    });
    return speed;
  }

  return (
    <div>
      <h4>Our Squad Stats</h4>
      <ul className="list-group">
        <li className="list-group-item">
          <b>Overall Strength: </b> {strength()}
        </li>
        <li className="list-group-item">
          <b>Overall Intelligence: </b> {intelligence()}
        </li>
        <li className="list-group-item">
          <b>Overall Speed: </b> {speed()}
        </li>
      </ul>
    </div>
  );
};

OurSquadSet.propTypes = {
  herosList: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    herosList: getHeros(state)
  }
};

const OurSquadSetContainer = connect(
  mapStateToProps
)(OurSquadSet);

export default OurSquadSetContainer;
