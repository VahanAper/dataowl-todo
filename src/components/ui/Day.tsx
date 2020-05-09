import React from 'react';
import { Link } from 'react-router-dom';

import './Day.css';

type Props = {
  day: string;
};

const Day = ({ day }: Props) => {
  const formatedDay = new Date(day).getUTCDate();

  return (
    <Link to={'/details/' + day}>
      <div className="day">
        <p>{formatedDay}</p>
      </div>
    </Link>
  );
};

export default React.memo(Day);
