import { useDispatch, useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";
import { addTask, deleteTask } from "../features/tasks/taskSlice";

export const Todo = () => {
  const [task, setTask] = useState("");

  const tasks = useSelector((state) => state.taskReducer.task);
  //   console.log("react-state", state.task);

  const dispatch = useDispatch();

  // handleFormSubmit :-
  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(addTask(task));
    return setTask("");
  };

  // handleTaskDelete :-
  const handleTaskDelete = (id) => {
    return dispatch(deleteTask(id));
  };

  return (
    <div className="container">
      <div className="todo-app">
        <h1>
          <i className="fa-regular fa-pen-to-square"></i>To-do List:
        </h1>

        <div className="row">
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              id="input-box"
              placeholder="Add a new task"
              value={task}
              onChange={(event) => setTask(event.target.value)}
            />
            <button>Add Task</button>
          </form>
        </div>

        <ul id="list-container" style={{ listStyle: "none" }}>
          {tasks?.map((curTask, index) => {
            return (
              <li key={index} style={{ display: "flex" }}>
                <p>
                  {index}: {curTask}
                </p>

                <div>
                  <MdDeleteForever
                    className="icon-style"
                    onClick={() => handleTaskDelete(index)}
                    style={{
                      marginLeft: "10px",
                      marginTop: "17.3px",
                      color: "red",
                    }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
