import React from 'react';
import { Task } from '../../types/task';
import styles from './TaskCard.module.css';

interface TaskCardProps {
  task: Task;
  onClick?: (task: Task) => void;
}

const statusLabels: Record<string, string> = {
  'todo': 'До виконання',
  'in-progress': 'В процесі',
  'done': 'Виконано',
};

const priorityLabels: Record<string, string> = {
  'low': 'Низький',
  'medium': 'Середній',
  'high': 'Високий',
};

export const TaskCard: React.FC<TaskCardProps> = ({ task, onClick }) => {
  return (
    <div className={styles.card} onClick={() => onClick?.(task)}>
      <div className={styles.header}>
        <h3 className={styles.title}>{task.title}</h3>
        <span className={`${styles.priority} ${styles[task.priority]}`}>
          {priorityLabels[task.priority]}
        </span>
      </div>
      <p className={styles.description}>{task.description}</p>
      <div className={styles.footer}>
        <span className={`${styles.status} ${styles[task.status]}`}>
          {statusLabels[task.status]}
        </span>
        <span className={styles.date}>
          {task.createdAt.toLocaleDateString('uk-UA')}
        </span>
      </div>
    </div>
  );
};