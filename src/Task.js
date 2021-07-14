import React from 'react';
import PropTypes from 'prop-types';
import './task.css';

const Task = ({ task }) => {
  const completion = task.completed ? 'complete' : 'incomplete';

  return (
    <p className="task" data-testid={`task-id-${task.id}`}>
      <span className={completion}>{task.completed ? '✓' : '×'}</span>
      <span className="task-name">{task.name}</span>
    </p>
  );
};

Task.propTypes = {
  task: PropTypes.shape(Object),
};

export default Task;
