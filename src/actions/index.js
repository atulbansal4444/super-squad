const ADD_CHARACTER = "ADD_CHARACTER";
const addCharacterById = id => {
  return {
    type: ADD_CHARACTER,
    id: id,
  };
};

const REMOVE_HERO = "REMOVE_HERO";
const removeHeroById = id => {
  return {
    type: REMOVE_HERO,
    id: id
  }
}

export {
  ADD_CHARACTER,
  addCharacterById,
  REMOVE_HERO,
  removeHeroById
};
