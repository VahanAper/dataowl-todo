import React from 'react';

import ListItem from './ListItem';

type Props = {
  todos: Todo[];
};

const List = ({ todos }: Props) => {
  return (
    <div>
      {todos.map((todo) => {
        return <ListItem key={todo.id} todo={todo} />
      })}
    </div>
  );
};

export default List;
