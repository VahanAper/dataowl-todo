import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { generateTotalMessage } from '../../utils';

import Tooltip from './Tooltip';

import './Day.css';

type Props = {
  day: string;
  todos: Todo[];
};

const Day = ({ day, todos }: Props) => {
  const formatedDay = new Date(day).getUTCDate();
  const totalMessage = generateTotalMessage(todos);
  const hasTodos = todos.length > 0;

  const [isTooltipShown, setIsTooltipShown] = useState(false);

  const handleMouseEnter = useCallback(() => {
    if (hasTodos) {
      setIsTooltipShown(true);
    }
  }, [hasTodos]);

  const handleMouseLeave = useCallback(() => {
    setIsTooltipShown(false);
  }, []);

  return (
    <Link to={'/details/' + day}>
      <div
        className={`day ${hasTodos ? 'active' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p>{formatedDay}</p>

        {isTooltipShown ? <Tooltip message={totalMessage} /> : null}
      </div>
    </Link>
  );
};

export default React.memo(Day);
