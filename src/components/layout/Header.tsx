import React from 'react';
import { useSelector } from 'react-redux';

import { generateTotalMessage } from '../../utils';
import { getTodos } from '../../store/selectors/todos';

import './Header.css'

type Props = {
  heading?: string;
};

const Header = ({ heading = 'Header' }: Props) => {
  const todos = useSelector(getTodos);
  const totalMessage = generateTotalMessage(todos);

  return (
    <header className="header">
      <h1 className="header_heading">{heading}</h1>

      <p className="header_total">{totalMessage}</p>
    </header>
  );
};

export default Header;
