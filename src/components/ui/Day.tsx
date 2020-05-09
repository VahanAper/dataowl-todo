import React from 'react';
import { Link } from 'react-router-dom';

import './Day.css';

type Props = {
  day: string;
  todos: Todo[];
};

const Day = ({ day, todos }: Props) => {
  const formatedDay = new Date(day).getUTCDate();

  console.log('todos ::: ', todos)

  return (
    <Link to={'/details/' + day}>
      <div className="day">
        <p>{formatedDay}</p>
      </div>
    </Link>
  );
};

export default React.memo(Day);
