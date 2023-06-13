import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

interface TodoFormProps {
  newTodo: string;
  setNewTodo: (value: string) => void;
  handleAddTodo: () => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ newTodo, setNewTodo, handleAddTodo }) => {
  const isDisabled = newTodo.trim() === '';

  return (
    <Form>
      <Row>
        <Col>
          <Form.Group>
            <Form.Control type="text" placeholder="What needs to be done?" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} style={{ lineHeight: '24px', fontSize: '12px' }} />
          </Form.Group>
        </Col>
        <Col xs="auto">
          <Button variant="primary" disabled={isDisabled} onClick={handleAddTodo}>
            Add Todo
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default TodoForm;
