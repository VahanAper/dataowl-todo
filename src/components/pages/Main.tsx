import React from 'react';

import Search from '../ui/Search';
import Calendar from '../ui/Calendar';

type Props = {
  todos: Todo[];
  handleSearch: (searchTerm: string) => void;
};

const Main = ({ todos, handleSearch }: Props) => {
  return (
    <div>
      <Search onSearch={handleSearch} />
      <Calendar data={todos} month={4} year={2020} />
    </div>
  );
};

export default React.memo(Main);
