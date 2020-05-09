import React from 'react';

type Props = {
  heading?: string;
};

const Header = ({ heading = 'Header' }: Props) => {
  return (
    <header>
      <h1>{heading}</h1>
    </header>
  );
};

export default Header;
