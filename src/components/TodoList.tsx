import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import TodoFilter from './TodoFilter';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [filter, setFilter] = useState<string>('all');

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
  const filteredTodos = filter === 'completed' ? completedTodos : filter === 'uncompleted' ? uncompletedTodos : todos;

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm newTodo={newTodo} setNewTodo={setNewTodo} handleAddTodo={handleAddTodo} />
      <hr />
      <TodoFilter value={filter} onChange={(value) => setFilter(value)} />
      <hr />
      <h2>{filter === 'completed' ? 'Completed' : filter === 'uncompleted' ? 'Uncompleted' : 'All'} Todos</h2>
      <ListGroup>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleToggleTodo={handleToggleTodo} />
        ))}
      </ListGroup>
      <hr />
      <p>Number of uncompleted tasks: {uncompletedTodos.length}</p>
    </div>
  );
};

export default TodoList;
