const reducer = (state, action) => {
  switch (action.type) {
    case 'addItem':
      return [...state, action.payload];

    case 'deleteItem': {
      const idx = state.findIndex(
        el => el.id.toString() === action.payload.toString()
      );
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    }

    case 'toggleImportant': {
      const idx = state.findIndex(
        el => el.id.toString() === action.payload.toString()
      );
      const oldItem = state[idx];
      const newItem = { ...oldItem, important: !oldItem.important };
      return [...state.slice(0, idx), newItem, ...state.slice(idx + 1)];
    }

    case 'toggleDone': {
      const idx = state.findIndex(
        el => el.id.toString() === action.payload.toString()
      );
      const oldItem = state[idx];
      const newItem = { ...oldItem, done: !oldItem.done };
      return [...state.slice(0, idx), newItem, ...state.slice(idx + 1)];
    }

    default:
      return state;
  }
};

export default reducer;
