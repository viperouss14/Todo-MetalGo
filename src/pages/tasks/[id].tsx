import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Undo2 } from 'lucide-react';
import { RootState } from '../../redux/store';
import styles from '../../styles/taskDetail.module.scss';
import { toggleTask } from '../../redux/tasksSlice';

export default function TaskDetail() {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();

  const task = useSelector((state: RootState) =>
    state.tasks.tasks.find((t) => t.id === Number(id))
  );

  if (!task) {
    return <div>Задача не найдена</div>;
  }

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  return (
    <div className={styles.container}>
      <button
        onClick={() => router.back()}
        className={styles.backButton}
        aria-label='Вернуться на главную страницу'
      >
        <Undo2 className={styles.backIcon} size={24} />
      </button>
      <h2 className={`${styles.taskTitle} ${task.completed ? styles.completedTitle : ''}`}>
        <span className={styles.titleLabel}>Задача:</span>{' '}
        <span className={styles.titleText}>{task.title}</span>
      </h2>
      <div className={styles.detailsContainer}>
        <p className={styles.detailItem}>
          <span className={styles.detailLabel}>ID:</span>{' '}
          <span className={styles.detailValue}>{task.id}</span>
        </p>
        <p className={styles.detailItem}>
          <span className={styles.detailLabel}>Статус:</span>{' '}
          <span
            className={`${styles.detailValue} ${task.completed ? styles.completedStatus : styles.pendingStatus}`}
          >
            {task.completed ? 'Выполнено' : 'Не выполнено'}
          </span>
        </p>
      </div>
      <button
        onClick={handleToggle}
        className={`${styles.toggleButton} ${task.completed ? styles.toggleButtonCompleted : styles.toggleButtonPending}`}
      >
        {task.completed ? 'Отметить как невыполненную' : 'Отметить как выполненную'}
      </button>
    </div>
  );
}
