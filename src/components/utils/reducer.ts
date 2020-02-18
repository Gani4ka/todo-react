export interface TodoItemInterface {
  label: string;
  important: boolean;
  done: boolean;
  id: string;
}

export const reducer = (
  state: TodoItemInterface[],
  action: Record<string, any>
): TodoItemInterface[] => {
  switch (action.type) {
    case 'addItem':
      return [...state, action.payload];

    case 'deleteItem': {
      const newState = state.filter(
        el => el.id.toString() !== action.payload.toString()
      );
      return newState;
    }

    case 'toggleImportant': {
      const newState = state.map(el => {
        if (el.id.toString() === action.payload.toString()) {
          el.important = !el.important;
          return el;
        }
        return el;
      });
      return newState;
    }

    case 'toggleDone': {
      const newState = state.map(el => {
        if (el.id.toString() === action.payload.toString()) {
          el.done = !el.done;
          return el;
        }
        return el;
      });
      return newState;
    }

    default:
      return state;
  }
};

export default reducer;
