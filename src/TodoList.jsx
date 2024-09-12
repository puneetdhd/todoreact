import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "sample Task", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState('');

    let addNewTask = () => {
        if (newTodo.trim()) {
            setTodos((prevTodos) => {
                return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
            });
            setNewTodo(''); // Clear input after adding task
        }
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    let UpperCaseAll = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase()
                };
            })
        );
    };

    let UpperCaseOne = (id) => {
        setTodos((todos) =>
            todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        task: todo.task.toUpperCase(),
                    };
                } else {
                    return todo;
                }
            })
        );
    };

    let markDone = (id) => {
        setTodos((todos) =>
            todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isDone: !todo.isDone
                    };
                }
                return todo;
            })
        );
    };

    return (
        <div>
            <input
                placeholder="add a task"
                value={newTodo}
                onChange={updateTodoValue}>
            </input>
            <button onClick={addNewTask}>Add Task</button>

            <br />
            <br />

            <h4>Todo List</h4>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span style={todo.isDone ? { textDecoration: 'line-through' } : {}}> 
                                {todo.task} 
                            </span>
                            &nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            <button onClick={() => markDone(todo.id)}>Done</button>
                        </li>
                    ))
                }
            </ul>

            <button onClick={UpperCaseAll}>Upper Case All</button>
        </div>
    );
}
