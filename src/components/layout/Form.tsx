import React, { useCallback, useState } from 'react';

import Button from '../ui/Button';
import FormInput from '../ui/FormInput';

type Props = {
  toggle: () => void;
  day: string,
};

const Form = ({ toggle, day }: Props) => {
  const [todo, setTodo] = useState({
    title: '',
    description: '',
    date: day,
  });

  const handleOnChange = useCallback(
    (newTodo: { [dataKey: string]: string }) => {
      setTodo((state) => {
        return {
          ...state,
          ...newTodo,
        };
      });
    },
    [],
  );

  console.log('todo ::: ', todo);

  return (
    <div>
      <FormInput dataKey="title" label="Title" onChange={handleOnChange} />

      <FormInput
        dataKey="description"
        label="Description"
        onChange={handleOnChange}
      />

      <Button onClick={() => {}}>Add</Button>
      <Button onClick={toggle}>Cancel</Button>
    </div>
  );
};

export default Form;
