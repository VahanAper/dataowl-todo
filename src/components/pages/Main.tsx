import React from 'react';
import { useSelector } from 'react-redux';

import Search from '../ui/Search';
import Calendar from '../ui/Calendar';

import { getTodos } from '../../store/selectors/todos';

const Main = () => {
  const todos = useSelector(getTodos);

  console.log('todos ::: ', todos);

  return (
    <div>
      <Search onSearch={() => {}} />
      <Calendar data={todos} month={4} year={2020} />
    </div>
  );
};

export default React.memo(Main);
