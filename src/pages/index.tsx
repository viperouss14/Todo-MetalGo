import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { AppDispatch } from '../redux/store';
import { fetchTasks } from '../redux/tasksSlice';
import styles from '../styles/home.module.scss';
import TaskList from '../components/TaskList';

export default function Home() {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Список задач</h1>
      <TaskList />
      <button onClick={() => router.push('/add-task')} className={styles.addButton}>
        Добавить задачу
      </button>
    </div>
  );
}
