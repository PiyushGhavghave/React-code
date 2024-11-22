import React, { useState } from 'react'
import {useDispatch } from 'react-redux'
import {createTodo}  from '../features/TodoSlice/TodoSlice'

//for notification
import { toast } from 'react-toastify';

function TodoForm() {
    const [todoText, setTodoText] = useState('');
    //dispatch action
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        if(todoText.trim() === ''){
            toast.error("Todo text cannot be empty!");
            return;
        }
        dispatch(createTodo(todoText));
        setTodoText('');
    }
    
    return (
        <form  className="flex" onSubmit={submitHandler}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
            />
            <button 
            type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
            >
                Add
            </button>
        </form>
    );
}

export default TodoForm;




