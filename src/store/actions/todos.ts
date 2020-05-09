import { MARK_TODO } from '../constants';

export const markTodoAsComplete = (id: number) => {
  return {
    type: MARK_TODO,
    payload: id,
  };
};
