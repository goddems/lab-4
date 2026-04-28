import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TaskCard } from '../../components/TaskCard/TaskCard';
import { useTasksStore } from '../../store/useTasksStore';
import { Task } from '../../types/task';

export const TasksPage: React.FC = () => {
  const navigate = useNavigate();
  const tasks = useTasksStore((state) => state.tasks);

  const handleTaskClick = (task: Task) => {
    navigate(`/task/${task.id}`);
  };

  return (
    <div>
      <h2>Всі задачі</h2>
      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onClick={handleTaskClick} />
        ))}
      </div>
    </div>
  );
};