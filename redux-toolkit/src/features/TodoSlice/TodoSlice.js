import { createSlice ,nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos : []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers : {
        createTodo : (state, action) => {
            const newTodo = {
                id : nanoid(),
                todoText : action.payload,
                completed : false
            }
            state.todos.unshift(newTodo);
        },
        deleteTodo : (state, action) => {
            state.todos = state.todos.filter((todo) => (todo.id !== action.payload))
        },
        updateTodo : (state, action) => {
            const {id , newText} = action.payload;
            state.todos = state.todos.map((todo) => (
                todo.id === id ? {...todo, todoText : newText} : todo 
            ))

        },
        toggleCheck : (state, action) => {
            state.todos = state.todos.map((todo) => (
                todo.id === action.payload ? {...todo, completed : !todo.completed} : todo
            ))
        }
    }
})

export const {createTodo, deleteTodo, updateTodo, toggleCheck} = todoSlice.actions;

export default todoSlice.reducer;