import React, { useMemo } from 'react';

import { formatMonthName, getDaysArray } from '../../utils';
import Day from './Day';

import './Calendar.css';

type Props = {
  month: number;
  year: number;
  data: Todo[];
};

const Calendar = ({ month, year, data }: Props) => {
  const header = formatMonthName(year, month);
  const daysArray = getDaysArray(year, month);

  const days: React.ReactElement[] = useMemo(() => {
    return daysArray.map((day: string) => {
      const todos = data.filter((todo) => todo.date === day);

      return <Day key={day} day={day} todos={todos} />;
    });
  }, [data, daysArray]);

  return (
    <div>
      <div className="calendar_header">
        <h2>{header}</h2>
      </div>

      <div className="calendar_days">{days}</div>
    </div>
  );
};

export default React.memo(Calendar);
