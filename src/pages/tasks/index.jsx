import { useForm } from "react-hook-form";
import { addTask, removeTask } from "../../actions";
import { useSelector, useDispatch } from "react-redux";

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
            className="py-1 px-4 w-full rounded-l mr-[1px]"
            {...register("todoCreator")}
          />

          <button
            type="submit"
            className="px-[18px] py-[6px] bg-slate-200 rounded-r text-sm"
          >
            Create
          </button>
        </div>

        <div>
          {tasks.map((task, index) => (
            <div className="flex justify-between items-center mb-2" key={index}>
              <div className="mr-5">{index + 1}</div>

              <div className="w-full mr-5">{task.taskMessage}</div>

              <div className="flex items-center justify-center">
                {/* <button className="px-2 py-[6px] bg-slate-200 text-sm rounded-l mr-[1px]">
                  Edit
                </button> */}

                <button
                  className="px-2 py-[6px] bg-slate-200 rounded-r text-sm"
                  onClick={() => dispatch(removeTask(index))}
                >
                  Del
                </button>
              </div>
            </div>
          ))}
        </div>
      </form>
    </>
  );
};
