import { ADD_CHARACTER } from "../actions";
import charactersJsonData from "../helperFiles/characters.json";

const heros = (state = [], action) => {
  switch (action.type) {
    case ADD_CHARACTER:
      return [...state, charactersJsonData.find((c) => c.id === action.id)];
    default:
      return state;
  }
};

export default heros;
