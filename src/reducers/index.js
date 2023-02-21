import { combineReducers } from "redux";
import characters from "./characters";
import heros from "./heros";

const rootReducer = combineReducers({
  characters,
  heros
});

export default rootReducer;