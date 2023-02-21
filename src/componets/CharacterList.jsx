import React, { Fragment } from "react";
import { connect } from "react-redux";
import { getCharacters } from "../selectors/characterSelectors";
import { addCharacterById } from "../actions";
import PropTypes from 'prop-types';

const CharacterList = ({ characterList, addCharacterById }) => {
  return (
    <Fragment>
      <h4>Characters</h4>
      <ul className="list-group">
        {
          characterList.map(character => {
            return (
              <li key={character.id} className="list-group-item">
                <div className="list-item">{character.name}</div>
                <div className="list-item right-button"
                  onClick={() => { addCharacterById(character.id) }}>
                  +
                </div>
              </li>
            )
          })
        }
      </ul>
    </Fragment>
  );
};

CharacterList.propTypes = {
  characterList: PropTypes.array.isRequired,
  addCharacterById: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    characterList: getCharacters(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCharacterById: id => dispatch(addCharacterById(id))
  }
}

const CharacterListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterList);

export default CharacterListContainer;
