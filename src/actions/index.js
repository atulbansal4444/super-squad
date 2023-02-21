const ADD_CHARACTER = "ADD_CHARACTER";
const addCharacterById = (id) => {
  return {
    type: ADD_CHARACTER,
    id: id,
  };
};

export { ADD_CHARACTER, addCharacterById };
