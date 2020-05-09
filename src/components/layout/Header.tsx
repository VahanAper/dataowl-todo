import React from 'react';
import { useSelector } from 'react-redux';

import { generateTotalMessage } from '../../utils';
import { getTodos } from '../../store/selectors/todos';

type Props = {
  heading?: string;
};

const Header = ({ heading = 'Header' }: Props) => {
  const todos = useSelector(getTodos);
  const totalMessage = generateTotalMessage(todos);

  return (
    <header>
      <h1>{heading}</h1>

      <div>{totalMessage}</div>
    </header>
  );
};

export default Header;
