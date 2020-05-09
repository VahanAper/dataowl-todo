import React, { useCallback, useState } from 'react';

import './FormInput.css';

type Props = {
  label: string;
  onChange: (newData: { [dataKey: string]: string }) => void;
  dataKey: string;
  required?: boolean;
};

const FormInput = ({ label, onChange, dataKey, required = false }: Props) => {
  const [hasError, setHasError] = useState(false);
  const [value, setValue] = useState('');

  const handleOnChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }, []);

  const handleOnBlur = useCallback(() => {
    if (value === '') {
      setHasError(true);
    } else {
      setHasError(false);
    }

    onChange({ [dataKey]: value });
  }, [dataKey, onChange, value]);

  return (
    <div className="form_input">
      <div className="form_input_wrapper">
        <span className="form_input_label">
          <label>{label}</label>
          {required ? (
            <span className="form_input_label_required">*</span>
          ) : null}
        </span>

        <input onChange={handleOnChange} onBlur={handleOnBlur} />
      </div>

      {hasError ? (
        <p className="form_input_error">This field is required</p>
      ) : null}
    </div>
  );
};

export default React.memo(FormInput);
