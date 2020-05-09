import { MARK_TODO, REMOVE_TODO } from '../constants';

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
