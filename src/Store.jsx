// import { createStore, applyMiddleware } from "redux";
// import { thunk } from "redux-thunk";
// import { composeWithDevTools } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
const FETCH_TASK = "task/fetch";

const initialState = {
  task: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, task: [...state.task, action.payload] };

    case DELETE_TASK:
      const updatedTask = state.task.filter((curTask, index) => {
        return index !== action.payload;
      });
      return { ...state, task: updatedTask };

    case FETCH_TASK:
      return { ...state, task: [...state.task, ...action.payload] };

    default:
      return state;
  }
};

//! (Old Style) :-
// export const store = createStore(
//   taskReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );
// console.log(store);

//! (New Style) :-
export const store = configureStore({
  reducer: {
    taskReducer,
  },
});

console.log("Initial State: ", store.getState());

export const addTask = (data) => {
  return { type: ADD_TASK, payload: data };
};

export const deleteTask = (id) => {
  return { type: DELETE_TASK, payload: id };
};

export const fetchTasks = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=3"
      );

      const task = await res.json();
      console.log(task);
      dispatch({
        type: FETCH_TASK,
        payload: task.map((curTask) => curTask.title),
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// store.dispatch({ type: ADD_TASK, payload: "Hello" });
store.dispatch(addTask("Buy Avocados"));
store.dispatch(addTask("Buy Mango"));
store.dispatch(addTask("Buy Apple"));
store.dispatch(addTask("Buy Orange"));
console.log("Updated State: ", store.getState());

// store.dispatch({ type: ADD_TASK, payload: "Buy Mango" });
store.dispatch(addTask("Buy Grapes"));
console.log("Updated State: ", store.getState());

// store.dispatch({ type: DELETE_TASK, payload: 1 });
store.dispatch(deleteTask(1));
console.log("Deleted State: ", store.getState());
