import { useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getTodos } from './store/selectors/todos';
import { hasMatch } from './utils';

export const useToggle = () => {
  const [isShown, setIsShown] = useState(false);

  const toggle = useCallback(() => {
    setIsShown((state) => !state);
  }, []);

  return { isShown, toggle };
};

export const useSearch = () => {
  const todos = useSelector(getTodos);
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  const handleSearch = useCallback(
    (searchTerm: string) => {
      const filteredTodos = todos.filter((todo) =>
        hasMatch(todo.title, searchTerm),
      );

      setFilteredTodos(filteredTodos);
    },
    [todos],
  );

  return {
    filteredTodos,
    handleSearch,
  };
};
