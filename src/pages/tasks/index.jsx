import { useForm } from "react-hook-form";
import { useState } from "react";

const todoData = [
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

export const Tasks = () => {
  const [tasks, setTasks] = useState(todoData);
  const { reset, register, handleSubmit } = useForm({
    defaultValues: todoData,
  });

  const onSubmit = (data) => {
    if (data.todoCreator) {
      setTasks([
        ...tasks,
        {
          id: todoData.length,
          taskMessage: data.todoCreator,
        },
      ]);
      reset();
    }
  };

  return (
    <>
      <form className="w-80" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between items-center mb-5">
          <input
            type="text"
            className="mr-5 w-full"
            {...register("todoCreator")}
          />

          <button type="submit">Create</button>
        </div>

        <div>
          {tasks.map((task, index) => {
            return (
              <div
                className="flex justify-between items-center mb-2"
                key={index}
              >
                <div className="mr-5">{index + 1}</div>

                <div className="w-full">{task.taskMessage}</div>
              </div>
            );
          })}
        </div>
      </form>
    </>
  );
};
