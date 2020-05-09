import { useState, useCallback } from 'react';

export const useToggle = () => {
  const [isShown, setIsShown] = useState(false);

  const toggle = useCallback(() => {
    setIsShown((state) => !state);
  }, []);

  return { isShown, toggle };
};
