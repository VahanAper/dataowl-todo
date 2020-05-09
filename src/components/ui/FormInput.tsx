import React, { useCallback } from 'react';

import './FormInput.css';

type Props = {
  label: string;
  onChange: (newData: { [dataKey: string]: string }) => void;
  dataKey: string;
};

const FormInput = ({ label, onChange, dataKey }: Props) => {
  const handleOnChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      onChange({ [dataKey]: e.currentTarget.value });
    },
    [dataKey, onChange],
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
