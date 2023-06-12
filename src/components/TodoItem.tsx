import React from 'react';
import { ListGroup, Form, Row, Col } from 'react-bootstrap';

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
    <ListGroup.Item style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <Row>
        <Col xs="auto">
          <Form.Check type="checkbox" checked={todo.completed} onChange={() => handleToggleTodo(todo.id)} />
        </Col>
        <Col>{todo.text}</Col>
      </Row>
    </ListGroup.Item>
  );
};

export default TodoItem;
