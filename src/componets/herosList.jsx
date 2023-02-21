import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getHeros } from "../selectors/heroSelectors";
import { removeHeroById } from "../actions";

const HerosList = ({ herosList, removeHeroById }) => {
  return (
    <div>
      <h4>Your Squad</h4>
      <ul className="list-group">
        {
          herosList.map(hero => {
            return (
              <li key={hero.id} className="list-group-item">
                <div className="list-item">{hero.name}</div>
                <div className="list-item right-button"
                  onClick={() => removeHeroById(hero.id)}>
                  x
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

HerosList.propTypes = {
  herosList: PropTypes.array.isRequired,
  removeHeroById: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    herosList: getHeros(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    removeHeroById: id => dispatch(removeHeroById(id))
  };
};

const HeroListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HerosList);

export default HeroListContainer;
