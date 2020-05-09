import React, { useCallback } from 'react';

import './Button.css';

type Props = {
  children: React.ReactChild;
  onClick: () => void;
};

const Button = ({ onClick, children }: Props) => {
  const handleOnClick = useCallback(() => {
    onClick();
  }, [onClick]);

  return (
    <button className="button" onClick={handleOnClick}>
      {children}
    </button>
  );
};

export default React.memo(Button);
