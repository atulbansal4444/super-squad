import { ADD_CHARACTER } from "../actions";
import charactersJsonData from "../helperFiles/characters.json";

const characters = (state = charactersJsonData, action) => {
  switch (action.type) {
    case ADD_CHARACTER:
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

export default characters;
