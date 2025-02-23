import { store } from "../../Store";
import { addTask } from "./taskSlice";

console.log(store.getState());

store.dispatch(addTask("Buy Avocados"));
console.log(store.getState());

store.dispatch(addTask("Buy Mango"));
console.log(store.getState());

store.dispatch(addTask("Buy Apple"));
console.log(store.getState());

store.dispatch(addTask("Buy Orange"));
console.log(store.getState());
