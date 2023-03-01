import { toggled } from "../actions";

const updateColor = (todoId, color) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        color: color,
      }),
    });
    const todo = await res.json();

    dispatch(toggled(todo.id, todo.color));
  };
};

export default updateColor;
