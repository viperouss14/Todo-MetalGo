import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { Undo2 } from 'lucide-react';
import { addTask } from '../redux/tasksSlice';
import styles from '../styles/addTask.module.scss';

export default function AddTask() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addTask(title));
      router.push('/');
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={() => router.back()} className={styles.backButton}>
        <Undo2 className={styles.backIcon} size={24} />
      </button>
      <h2 className={styles.title}>Добавить новую задачу</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Введите название задачи'
          required
          className={styles.textarea}
        />
        <button className={styles.button} type='submit'>
          Сохранить
        </button>
      </form>
    </div>
  );
}
