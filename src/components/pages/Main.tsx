import React from 'react';

import Search from '../ui/Search';
import Calendar from '../ui/Calendar';

const Main = () => {
  return (
    <div>
      <Search onSearch={() => {}} />
      <Calendar month={4} year={2020} />
    </div>
  );
};

export default React.memo(Main);
