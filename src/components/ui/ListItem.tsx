import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import Button from './Button';

import { markTodoAsComplete, deleteTodo } from '../../store/actions/todos';

import './ListItem.css';

type Props = {
  todo: Todo;
};

const ListItem = ({ todo }: Props) => {
  const dispatch = useDispatch();

  const handleMarkTodo = useCallback(() => {
    dispatch(markTodoAsComplete(todo.id));
  }, [dispatch, todo.id]);

  const handleDelete = useCallback(() => {
    dispatch(deleteTodo(todo.id));
  }, [dispatch, todo.id]);

  return (
    <div className="list_item">
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>

      <Button withConfirmation onClick={handleDelete}>
        Remove
      </Button>

      {!todo.isCompleted ? (
        <Button withConfirmation onClick={handleMarkTodo}>
          Mark as done
        </Button>
      ) : null}
    </div>
  );
};

export default ListItem;
