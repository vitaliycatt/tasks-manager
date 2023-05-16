export const addTask = (newTask) => {
  return {
    type: "ADD_TASK",
    newTask,
  };
};

export const removeTask = (removedTask) => {
  return {
    type: "REMOVE_TASK",
    removedTask,
  };
};
