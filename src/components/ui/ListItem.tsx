import React from 'react';

import Button from './Button';

import './ListItem.css';

type Props = {
  todo: Todo;
};

const ListItem = ({ todo }: Props) => {
  return (
    <div className="list_item">
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>

      <Button onClick={() => {}}>Remove</Button>

      {!todo.isCompleted ? (
        <Button onClick={() => {}}>Mark as done</Button>
      ) : null}
    </div>
  );
};

export default ListItem;
