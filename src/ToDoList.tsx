import React from 'react';
import ToDoItem from './ToDoItem';

interface ToDoListProps {
    tasks: string[];
}

const ToDoList: React.FC<ToDoListProps> = ({ tasks }) => {
    return (
        <ul>
            {tasks.map((task, index) => (
                <ToDoItem key={index} task={task} />
            ))}
        </ul>
    );
};

export default ToDoList;
