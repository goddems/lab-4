import { create } from 'zustand';
import { Task, TaskStatus, TaskPriority } from '../types/task';
import { INITIAL_TASKS } from '../data/initialTasks';

interface TasksState {
  tasks: Task[];
  addTask: (task: Omit<Task, 'id' | 'createdAt'>) => void;
  deleteTask: (id: string) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
}

export const useTasksStore = create<TasksState>((set) => ({
  tasks: INITIAL_TASKS,

  addTask: (taskData) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          ...taskData,
          id: String(Date.now()),
          createdAt: new Date(),
        },
      ],
    })),

  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),

  updateTask: (id, updates) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, ...updates } : task
      ),
    })),
}));