declare type Todo = {
  id: number;
  title: string;
  description: string;
  date: string;
  isCompleted: boolean;
};

declare type TodoAction<T> = {
  type: string;
  payload: T;
};

declare type Store = {
  todos: Todo[];
};
