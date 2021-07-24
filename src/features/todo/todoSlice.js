import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1,
            title: "Todo A",
            project: "Project A",
            completed: false,
        },
        {
            id: 2,
            title: "Todo B",
            project: "Project B",
            completed: true,
        },
        {
            id: 3,
            title: "Todo C",
            project: "Project C",
            completed: false,
        },
        {
            id: 4,
            title: "Todo D",
            project: "Project D",
            completed: true,
        },
    ],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        toggleCompleted: (state, action) => {
            state.todos.forEach(todo => {
                if(todo.id === action.payload){
                    todo.completed = !todo.completed;
                }
            }) 
        },
        updateTodo: (state, action) => {
            const { id, title, project } = action.payload;
            const existingTodo = state.todos.find(todo => todo.id === id);
            if(existingTodo){
                existingTodo.title = title;
                existingTodo.project = project;
            }
        },
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        deleteTodo: (state, action) => {
            const newTodos = state.todos.filter(todo => todo.id !== action.payload);
            if(window.confirm('Are you sure you want to delete?')){
                state.todos = newTodos;
            }
        }
        
    }
})

export const { toggleCompleted, updateTodo, addTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer