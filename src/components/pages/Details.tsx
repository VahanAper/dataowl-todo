import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Button from '../ui/Button';
import List from '../ui/List';
import Modal from '../ui/Modal';
import Form from '../layout/Form';

import { getTodos } from '../../store/selectors/todos';
import { useToggle } from '../../hooks';
import { longFormatDay } from '../../utils';

const Details = () => {
  const { day } = useParams();
  const formatedDay = longFormatDay(day);

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
          <Form day={day} toggle={toggle} />
        </Modal>
      ) : null}

      <List todos={todos} />
    </div>
  );
};

export default React.memo(Details);
