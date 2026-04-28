import React from 'react';
import { useParams, useNavigate } from 'react-router';
import { useTasksStore } from '../../store/useTasksStore';
import styles from './TaskDetailPage.module.css';

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

export default function TaskDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const tasks = useTasksStore((state) => state.tasks);
  
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return (
      <div className={styles.container}>
        <h2>Задачу не знайдено</h2>
        <button onClick={() => navigate('/tasks')}>Назад до списку</button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => navigate('/tasks')}>
        ← Назад
      </button>
      
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.title}>{task.title}</h1>
          <span className={`${styles.priority} ${styles[task.priority]}`}>
            {priorityLabels[task.priority]}
          </span>
        </div>
        
        <div className={styles.meta}>
          <span className={`${styles.status} ${styles[task.status]}`}>
            {statusLabels[task.status]}
          </span>
          <span className={styles.date}>
            Створено: {task.createdAt.toLocaleDateString('uk-UA')}
          </span>
        </div>
        
        <div className={styles.content}>
          <h3>Опис</h3>
          <p>{task.description}</p>
        </div>
      </div>
    </div>
  );
};