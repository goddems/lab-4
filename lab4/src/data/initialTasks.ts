import { Task } from '../types/task';

export const INITIAL_TASKS: Task[] = [
  {
    id: '1',
    title: 'Налаштувати React проєкт',
    description: 'Ініціалізувати проєкт з Vite, налаштувати TypeScript та ESLint',
    status: 'done',
    priority: 'high',
    createdAt: new Date('2026-04-15'),
  },
  {
    id: '2',
    title: 'Створити компоненти інтерфейсу',
    description: 'Розробити базові компоненти: Layout, TaskCard, форми вводу',
    status: 'in-progress',
    priority: 'high',
    createdAt: new Date('2026-04-18'),
  },
  {
    id: '3',
    title: 'Реалізувати маршрутизацію',
    description: 'Налаштувати React Router для навігації між сторінками',
    status: 'todo',
    priority: 'medium',
    createdAt: new Date('2026-04-20'),
  },
  {
    id: '4',
    title: 'Додати стилізацію',
    description: 'Створити CSS модулі для всіх компонентів',
    status: 'todo',
    priority: 'medium',
    createdAt: new Date('2026-04-22'),
  },
  {
    id: '5',
    title: 'Написати unit тести',
    description: 'Створити тести для основних компонентів та функцій',
    status: 'todo',
    priority: 'low',
    createdAt: new Date('2026-04-25'),
  },
];