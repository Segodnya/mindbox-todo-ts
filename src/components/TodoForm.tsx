import React from 'react';
import { Button, Form } from 'react-bootstrap';

interface TodoFormProps {
  newTodo: string;
  setNewTodo: (value: string) => void;
  handleAddTodo: () => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ newTodo, setNewTodo, handleAddTodo }) => {
  return (
    <Form>
      <Form.Group>
        <Form.Control type="text" placeholder="Enter new todo" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      </Form.Group>
      <Button variant="primary" onClick={handleAddTodo}>
        Add Todo
      </Button>
    </Form>
  );
};

export default TodoForm;
