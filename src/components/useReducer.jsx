import { useReducer, useState } from "react";
import { Button } from "flowbite-react";
import { MdDeleteOutline } from "react-icons/md";

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
};

const App = () => {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim()) {
      dispatch({ type: "ADD_TASK", payload: newTask });
      setNewTask("");
    }
  };

  const handleToggleTask = (taskId) => {
    dispatch({ type: "TOGGLE_TASK", payload: taskId });
  };

  const handleDeleteTask = (taskId) => {
    dispatch({ type: "DELETE_TASK", payload: taskId });
  };

  return (
    <>
      <div className="max-w-lg m-20 p-10 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex justify-center items-center gap-2 flex-col">
          <h2 className="text-gray-800 font-bold text-xl mb-2">
            useState Hook
          </h2>
          <h2 className="text-red-700 font-bold text-xl mb-2">
            Task Manager App
          </h2>
          <div className="flex gap-3">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Enter the task..."
            />
            <Button onClick={handleAddTask}>Add Task</Button>
          </div>
          <ul className="m-3 w-full flex-row">
            {tasks.map((task) => (
              <li key={task.id} className="flex items-baseline border mb-1">
                <div className="flex justify-center items-baseline gap-2 p-3">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleToggleTask(task.id)}
                  />
                  <span
                    style={{
                      textDecoration: task.completed ? "line-through" : "none",
                    }}
                    className="mx-10 font-bold"
                  >
                    {task.text}
                  </span>
                  <button
                    onClick={() => handleDeleteTask(task.id)}
                    className=""
                  >
                    <span>
                      <MdDeleteOutline size={20} color="red" />
                    </span>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
