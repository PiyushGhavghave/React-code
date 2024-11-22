import { createSlice ,nanoid} from "@reduxjs/toolkit";

const getLocalData = () => {
    const data = localStorage.getItem('todos')
    return data ? JSON.parse(data) : [];
}
const setLocalData = (data) => {
    localStorage.setItem('todos' , JSON.stringify(data))
}

const initialState = {
    todos : getLocalData()
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
            setLocalData(state.todos)
        },
        deleteTodo : (state, action) => {
            state.todos = state.todos.filter((todo) => (todo.id !== action.payload))
            setLocalData(state.todos)
        },
        updateTodo : (state, action) => {
            const {id , newText} = action.payload;
            state.todos = state.todos.map((todo) => (
                todo.id === id ? {...todo, todoText : newText} : todo 
            ))
            setLocalData(state.todos)

        },
        toggleCheck : (state, action) => {
            state.todos = state.todos.map((todo) => (
                todo.id === action.payload ? {...todo, completed : !todo.completed} : todo
            ))
            setLocalData(state.todos)
        }
    }
})

export const {createTodo, deleteTodo, updateTodo, toggleCheck} = todoSlice.actions;

export default todoSlice.reducer;