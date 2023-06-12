import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

interface TodoFormProps {
  newTodo: string;
  setNewTodo: (value: string) => void;
  handleAddTodo: () => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ newTodo, setNewTodo, handleAddTodo }) => {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Group>
            <Form.Control type="text" placeholder="Enter new todo" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
          </Form.Group>
        </Col>
        <Col xs="auto">
          <Button variant="primary" onClick={handleAddTodo}>
            Add Todo
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default TodoForm;
