import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;
    const todo: Todo = {
      id: todos.length + 1,
      text: newTodo,
      completed: false,
    };
    setTodos([...todos, todo]);
    setNewTodo('');
  };

  const handleToggleTodo = (id: number) => {
    const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    setTodos(updatedTodos);
  };

  const completedTodos = todos.filter((todo) => todo.completed);
  const uncompletedTodos = todos.filter((todo) => !todo.completed);

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm newTodo={newTodo} setNewTodo={setNewTodo} handleAddTodo={handleAddTodo} />
      <hr />
      <h2>Uncompleted Todos</h2>
      <ListGroup>
        {uncompletedTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleToggleTodo={handleToggleTodo} />
        ))}
      </ListGroup>
      <hr />
      <h2>Completed Todos</h2>
      <ListGroup>
        {completedTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleToggleTodo={handleToggleTodo} />
        ))}
      </ListGroup>
    </div>
  );
};

export default TodoList;
