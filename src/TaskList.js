import React, { useState, useEffect } from 'react';
import { getTasks } from './api/tasksService';
import Task from './Task';

const TaskList = () => {
  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const { data } = await getTasks();
        setTasks(data);
        setError(null);
      } catch (error) {
        setError('Failed to fetch tasks');
      }
    }

    fetchTasks();
  }, []);

  return (
    <div>
      <h3>TaskList</h3>
      {error !== null && <h4>{error}</h4>}
      {tasks.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </div>
  );
};

export default TaskList;
