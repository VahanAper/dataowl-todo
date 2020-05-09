import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import Button from '../ui/Button';
import List from '../ui/List';
import Modal from '../ui/Modal';
import Form from '../layout/Form';

import { useToggle } from '../../hooks';
import { longFormatDay } from '../../utils';

type Props = {
  todos: Todo[];
};

const Details = ({ todos }: Props) => {
  const { day } = useParams();
  const formatedDay = longFormatDay(day);

  const data = useMemo(() => {
    return todos.filter((todo) => todo.date === day);
  }, [day, todos]);

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

      <List todos={data} />
    </div>
  );
};

export default React.memo(Details);
