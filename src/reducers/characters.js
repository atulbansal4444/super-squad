import { ADD_CHARACTER, REMOVE_HERO } from "../actions";
import charactersJsonData from "../helperFiles/characters.json";

const characters = (state = charactersJsonData, action) => {
  switch (action.type) {
    case ADD_CHARACTER:
      return state.filter((item) => item.id !== action.id);
    case REMOVE_HERO:
      return [...state, charactersJsonData.find((c) => c.id === action.id)]
        .sort((a, b) => a.id - b.id);
    default:
      return state;
  }
};

export default characters;
