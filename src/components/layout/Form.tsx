import React, { useCallback, useState } from 'react';

import Button from '../ui/Button';
import FormInput from '../ui/FormInput';

import { longFormatDay } from '../../utils';

type Props = {
  toggle: () => void;
  day: string;
};

const Form = ({ toggle, day }: Props) => {
  const formatedDay = longFormatDay(day);

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
      <h3>Add a new to do item due to {formatedDay}</h3>

      <FormInput
        required
        dataKey="title"
        label="Title"
        onChange={handleOnChange}
      />

      <FormInput
        required
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