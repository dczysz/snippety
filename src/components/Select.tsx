import React from 'react';

import StyledSelect from './styles/Select';

interface Props {
  label: string;
  defaultValue: string;
  options: {
    [key: string]: {
      name: string;
      code: string;
    };
  };
  setValue: (newValue: string) => void;
}

const Select: React.FC<Props> = ({
  label,
  defaultValue,
  options,
  setValue,
}) => {
  return (
    <StyledSelect className="select">
      <span>{label}</span>
      <select
        defaultValue={defaultValue}
        onChange={e => setValue(e.target.value)}
      >
        {Object.keys(options).map(key => (
          <option key={key} value={options[key].code}>
            {options[key].name}
          </option>
        ))}
      </select>
    </StyledSelect>
  );
};

export default Select;
