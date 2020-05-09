import React, { useCallback } from 'react';

import './Button.css';

type Props = {
  children: React.ReactChild;
  onClick: () => void;
  withConfirmation?: boolean;
  disabled?: boolean;
};

const Button = ({
  onClick,
  children,
  withConfirmation = false,
  disabled = false,
}: Props) => {
  const handleOnClick = useCallback(() => {
    if (withConfirmation) {
      const isConfirmed = window.confirm('Are you sure?');

      if (isConfirmed) {
        onClick();
      }
    } else {
      onClick();
    }
  }, [onClick, withConfirmation]);

  return (
    <button disabled={disabled} className="button" onClick={handleOnClick}>
      {children}
    </button>
  );
};

export default React.memo(Button);
