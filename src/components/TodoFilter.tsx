import React from 'react';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const TodoFilter: React.FC<Props> = ({ value, onChange }) => {
  return (
    <ToggleButtonGroup type="radio" name="options" value={value} onChange={(value) => onChange(value)}>
      <ToggleButton variant="outline-primary" value="all" id="all">
        All
      </ToggleButton>
      <ToggleButton variant="outline-primary" value="uncompleted" id="uncompleted">
        Active
      </ToggleButton>
      <ToggleButton variant="outline-primary" value="completed" id="completed">
        Completed
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default TodoFilter;
