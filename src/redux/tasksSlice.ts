import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Task, TaskState } from '../types/task';
import { RootState } from '../redux/store';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async (_, { getState }) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
  if (!response.ok) {
    throw new Error('Failed to fetch tasks');
  }
  const data = await response.json();
  const state = getState() as RootState;
  const localTasks = state.tasks.tasks.filter(
    (task) => !data.some((fetchedTask: Task) => fetchedTask.id === task.id)
  );

  return [...data, ...localTasks];
});

const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask: Task = {
        id: Date.now(),
        title: action.payload,
        completed: false,
      };
      state.tasks = [...state.tasks, newTask];
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
        state.error = null;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export const { addTask, toggleTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;