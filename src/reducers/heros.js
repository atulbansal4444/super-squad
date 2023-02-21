import { ADD_CHARACTER } from "../actions";
import charactersJsonData from "../helperFiles/characters.json";
import { REMOVE_HERO } from "../actions";

const removerHero = (heros, id) => {
  return heros.filter(hero => hero.id !== id);
}

const heros = (state = [], action) => {
  switch (action.type) {
    case ADD_CHARACTER:
      return [...state, charactersJsonData.find((c) => c.id === action.id)];
    case REMOVE_HERO:
      return removerHero(state, action.id);
    default:
      return state;
  }
};

export default heros;
