import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Button from '../ui/Button';
import List from '../ui/List';
import Modal from '../ui/Modal';

import { getTodos } from '../../store/selectors/todos';
import { useToggle } from '../../hooks';

const Details = () => {
  const { day } = useParams();
  const formatedDay = new Date(day).toDateString();

  const data = useSelector(getTodos);
  const todos = useMemo(() => {
    return data.filter((todo) => todo.date === day);
  }, [data, day]);

  const { isShown, toggle } = useToggle();

  return (
    <div>
      <h2>Todo list due to {formatedDay}</h2>

      <Button onClick={toggle}>Add new todo</Button>

      {isShown ? (
        <Modal onClose={toggle}>
          <p>Modal Content</p>
        </Modal>
      ) : null}

      <List todos={todos} />
    </div>
  );
};

export default React.memo(Details);
