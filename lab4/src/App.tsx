import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { TasksPage } from './pages/TasksPage/TasksPage';
import { TaskDetailPage } from './pages/TaskDetailPage/TaskDetailPage';
import { NewTaskPage } from './pages/NewTaskPage/NewTaskPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TasksPage />} />
          <Route path="task/:id" element={<TaskDetailPage />} />
          <Route path="new" element={<NewTaskPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;