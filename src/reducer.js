export const initialState = {
  basket: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "add_to_cart":
      return state;
    case "remove_from_cart":
      return state;
    default:
      return state;
  }
};
