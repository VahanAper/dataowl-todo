import React from 'react';
import Header from './Header';

type Props = {
  children: React.ReactChild;
};

const Page = ({ children }: Props) => {
  return (
    <div>
      <Header />

      {children}
    </div>
  );
};

export default Page;
