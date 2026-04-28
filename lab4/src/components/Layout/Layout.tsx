import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

export const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1 className={styles.title}>Task Manager</h1>
        <nav className={styles.nav}>
          <a href="/">Всі задачі</a>
          <a href="/new">Нова задача</a>
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <p>© 2026 Task Manager</p>
      </footer>
    </div>
  );
};