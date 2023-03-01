import React from "react";
import { useDispatch } from "react-redux";
import doubleTick from "../assets/images/double-tick.png";
import notedImg from "../assets/images/notes.png";
import plusImg from "../assets/images/plus.png";
import { added, allCompleted, clearCompleted } from "../redux/todos/actions";

const Header = () => {
  const dispatch = useDispatch();

  const handleSubmitTodo = (e) => {
    e.preventDefault();
    const form = e.target;
    const todoText = form.title.value;
    dispatch(added(todoText));
    form.reset("");
  };

  const handleCompleteAllTask = () => {
    dispatch(allCompleted());
  };

  const handleClearCompleteTask = () => {
    dispatch(clearCompleted());
  };

  return (
    <div>
      <form
        onSubmit={handleSubmitTodo}
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
      >
        <img src={notedImg} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          name="title"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('${plusImg}')] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          onClick={handleCompleteAllTask}
          className="flex space-x-1 cursor-pointer"
        >
          <img className="w-4 h-4" src={doubleTick} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li onClick={handleClearCompleteTask} className="cursor-pointer">
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;
