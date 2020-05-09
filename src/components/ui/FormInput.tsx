import React, { useCallback } from 'react';

import './FormInput.css';

type Props = {
  label: string;
  onChange: (value: string) => void;
};

const FormInput = ({ label, onChange }: Props) => {
  const handleOnChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      onChange(e.currentTarget.value);
    },
    [onChange],
  );

  return (
    <div className="form_input">
      <div className="form_input_wrapper">
        <label>{label}</label>

        <input onChange={handleOnChange} />
      </div>
    </div>
  );
};

export default React.memo(FormInput);
