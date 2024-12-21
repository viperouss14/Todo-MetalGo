export interface Task {
  id: number;
  title: string;
  completed: boolean;
  userId?: number;
}

export interface TaskState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
}