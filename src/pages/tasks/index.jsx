import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../../actions";

export const Tasks = () => {
  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const { reset, register, handleSubmit } = useForm({
    defaultValues: tasks,
  });

  const onSubmit = (data) => {
    const taskDataPrepatation = {
      id: tasks.length,
      taskMessage: data.todoCreator,
    };

    if (data.todoCreator) {
      dispatch(addTask(taskDataPrepatation));
      reset();
    }
  };

  return (
    <>
      <form className="w-80" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between items-center mb-5">
          <input
            type="text"
            className="py-1 px-4 w-full rounded-l"
            {...register("todoCreator")}
          />

          <button type="submit" className="px-3 py-1 bg-slate-200 rounded-r">
            Create
          </button>
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
