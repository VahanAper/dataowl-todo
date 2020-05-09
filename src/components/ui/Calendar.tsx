import React, {useMemo} from 'react';

import { formatMonthName, getDaysArray } from '../../utils';
import Day from './Day'

import './Calendar.css';

type Props = {
  month: number;
  year: number;
};

const Calendar = ({ month, year }: Props) => {
  const header = formatMonthName(year, month);
  const daysArray = getDaysArray(year, month);

  const days: React.ReactElement[] = useMemo(() => {
    return daysArray.map((day: string) => {
      return <Day key={day} day={day} />;
    });
  }, [daysArray]);

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
