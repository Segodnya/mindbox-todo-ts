import React from 'react';
import { ListGroup } from 'react-bootstrap';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  handleToggleTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, handleToggleTodo }) => {
  return (
    <ListGroup.Item style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} onClick={() => handleToggleTodo(todo.id)}>
      {todo.text}
    </ListGroup.Item>
  );
};

export default TodoItem;
