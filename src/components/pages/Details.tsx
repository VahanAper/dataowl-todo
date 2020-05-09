import React, {useMemo} from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Button from '../ui/Button';
import List from '../ui/List';

import { getTodos } from '../../store/selectors/todos';

const Details = () => {
  const { day } = useParams();
  const formatedDay = new Date(day).toDateString();

  const data = useSelector(getTodos);
  const todos = useMemo(() => {
    return data.filter((todo) => todo.date === day);
  }, [data, day]);

  return (
    <div>
      <h2>Todo list due to {formatedDay}</h2>

      <Button onClick={() => {}}>Add new todo</Button>

      <List todos={todos} />
    </div>
  );
};

export default React.memo(Details);
