import { added } from "../actions";

const addTodo = (todoText) => {
  return async (dispatch) => {
    const res = await fetch("http://localhost:9000/todos", {
      method: "POST",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        text: todoText,
        completed: false,
      }),
    });
    const todo = await res.json();

    dispatch(added(todo.text));
  };
};

export default addTodo;
