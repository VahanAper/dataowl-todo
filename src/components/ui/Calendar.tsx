import React from 'react';

import { formatMonthName } from '../../utils';

import './Calendar.css';

type Props = {
  month: number;
  year: number;
};

const Calendar = ({ month, year }: Props) => {
  const header = formatMonthName(year, month);

  return (
    <div>
      <div className="calendar_header">
        <h2>{header}</h2>
      </div>

      <div>Day cells goes here</div>
    </div>
  );
};

export default React.memo(Calendar);
