const initialState = [];

function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "ADD_TO_CART":
      const index = state.findIndex((element) => element.id === payload.id);
      if (index < 0) return [...state, payload];
      else {
        state[index].quantity++;
        return [...state];
      }

    default:
      return state;
  }
}

export default cartReducer;
