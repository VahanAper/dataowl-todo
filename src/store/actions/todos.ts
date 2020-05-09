import { MARK_TODO, REMOVE_TODO, ADD_TODO } from '../constants';

export const markTodoAsComplete = (id: number) => {
  return {
    type: MARK_TODO,
    payload: id,
  };
};

export const deleteTodo = (id: number) => {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};

export const addTodo = (todo: any) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};
