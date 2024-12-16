import React from 'react';

interface ToDoItemProps {
    task: string;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ task }) => {
    return <li>{task}</li>;
};

export default ToDoItem;
