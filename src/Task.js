import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ task }) => {
  return <div>{task.name}</div>;
};

Task.propTypes = {
  task: PropTypes.shape(Object),
};

export default Task;
