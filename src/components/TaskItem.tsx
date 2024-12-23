import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { Trash2 } from 'lucide-react';
import styles from '../styles/taskItem.module.scss';
import { toggleTask, removeTask } from '../redux/tasksSlice';
import { Task } from '../types/task';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleRemove = () => {
    dispatch(removeTask(task.id));
  };

  return (
    <div className={styles.taskItem}>
      <p className={styles.taskId}>ID: {task.id}</p>
      <input
        type='checkbox'
        checked={task.completed}
        onChange={handleToggle}
        className={styles.checkbox}
      />

      <Link
        href={`/tasks/${task.id}`}
        className={`${styles.link} ${task.completed ? styles.completed : ''}`}
      >
        <span className={styles.title}>{task.title}</span>
      </Link>
      <button onClick={handleRemove} className={styles.removeButton} aria-label='Удалить задачу'>
        <Trash2 size={20} />
      </button>
    </div>
  );
};

export default TaskItem;
