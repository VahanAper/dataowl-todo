import React from 'react';

import Button from '../ui/Button';
import FormInput from '../ui/FormInput';

type Props = {
  toggle: () => void;
};

const Form = ({ toggle }: Props) => {
  return (
    <div>
      <FormInput label="Title" onChange={() => {}} />

      <FormInput label="Description" onChange={() => {}} />

      <Button onClick={() => {}}>Add</Button>
      <Button onClick={toggle}>Cancel</Button>
    </div>
  );
};

export default Form;
