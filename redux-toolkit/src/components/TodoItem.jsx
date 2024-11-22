import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateTodo,
  deleteTodo,
  toggleCheck,
} from "../features/TodoSlice/TodoSlice";

//for notification
import { toast } from "react-toastify";



function TodoItem({todo}) {
  //dispatch actions
  const dispatch = useDispatch();

  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [newText , setNewText ] = useState(todo.todoText)

  return(
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={() => dispatch(toggleCheck(todo.id))}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg transition-all duration-300 ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through opacity-75" : ""}`}
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            dispatch(updateTodo({ id: todo.id, newText: newText }))
            setIsTodoEditable(false);
            toast.success("Todo updated!")
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed || newText.trim() === ""}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => dispatch(deleteTodo(todo.id))}
      >
        ❌
      </button>
    </div>
  )
}

export default TodoItem;
