import React, { useState } from 'react';
import ToDoList from './ToDoList';
import './App.css';

const App = () => {
    const [tasks, setTasks] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>('');

    const addTask = () => {
        if (inputValue) {
            setTasks([...tasks, inputValue]);
            setInputValue('');
        }
    };

    return (
        <div className="app">
            <h1>To-Do List</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a new task..."
            />
            <button onClick={addTask}>Add</button>
            <ToDoList tasks={tasks} />
        </div>
    );
};

export default App;
