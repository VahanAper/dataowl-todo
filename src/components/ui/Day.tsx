import React from 'react';
import { Link } from 'react-router-dom';

import { generateTotalMessage } from '../../utils';

import './Day.css';

type Props = {
  day: string;
  todos: Todo[];
};

const Day = ({ day, todos }: Props) => {
  const formatedDay = new Date(day).getUTCDate();
  const totalMessage = generateTotalMessage(todos);

  return (
    <Link to={'/details/' + day}>
      <div className="day">
        <p>{formatedDay}</p>

        <p>{totalMessage}</p>
      </div>
    </Link>
  );
};

export default React.memo(Day);
