import React from 'react';

import './Tooltip.css';

type Props = {
  message: string;
};

const Tooltip = ({ message }: Props) => {
  return (
    <div className="tooltip">
      <p className="tooltip_message">{message}</p>
    </div>
  );
};

export default React.memo(Tooltip);
