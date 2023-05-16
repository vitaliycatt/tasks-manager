export const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.newTask];
    case "REMOVE_TASK":
      state.splice(action.removedTask, 1);
      return [...state];
    default:
      return state;
  }
};
