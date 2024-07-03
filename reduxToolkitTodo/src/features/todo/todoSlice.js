import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "HelloWorld" }]
}

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            state.todos.map((todo) => {
                if (todo.id === id) {
                    todo.text = text;
                }
            })
        }

    }
})


export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
// individual exports are used in components
export default todoSlice.reducer
// this export will be used in the store to store the values according to the user