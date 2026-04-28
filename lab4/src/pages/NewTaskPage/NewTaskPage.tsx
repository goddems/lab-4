import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TaskStatus, TaskPriority } from '../../types/task';
import { useTasksStore } from '../../store/useTasksStore';
import styles from './NewTaskPage.module.css';

export const NewTaskPage: React.FC = () => {
  const navigate = useNavigate();
  const addTask = useTasksStore((state) => state.addTask);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'todo' as TaskStatus,
    priority: 'medium' as TaskPriority,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTask(formData);
    navigate('/');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.container}>
      <h2>Створити нову задачу</h2>
      
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="title">Назва</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="description">Опис</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            required
          />
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="status">Статус</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="todo">До виконання</option>
              <option value="in-progress">В процесі</option>
              <option value="done">Виконано</option>
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="priority">Пріоритет</label>
            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
            >
              <option value="low">Низький</option>
              <option value="medium">Середній</option>
              <option value="high">Високий</option>
            </select>
          </div>
        </div>

        <div className={styles.actions}>
          <button type="button" className={styles.cancelButton} onClick={() => navigate('/')}>
            Скасувати
          </button>
          <button type="submit" className={styles.submitButton}>
            Створити
          </button>
        </div>
      </form>
    </div>
  );
};