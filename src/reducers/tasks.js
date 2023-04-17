const todos = [
  {
    id: 0,
    taskMessage: "Read book 25 min per day",
  },
  {
    id: 1,
    taskMessage: "Sell something to get a little bit money",
  },
  {
    id: 2,
    taskMessage: "Call to my granfather & grandmother tomorrow",
  },
];

export const tasksReducer = (state = todos, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.newTask];
    default:
      return state;
  }
};
