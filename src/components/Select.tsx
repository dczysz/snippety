import React from 'react';

import StyledSelect from './styles/Select';

interface Props {
  actionType: string;
  defaultValue: string;
  dispatch: React.Dispatch<{ type: string; payload: string }>;
  label: string;
  options: {
    [key: string]: {
      name: string;
      code: string;
    };
  };
}

const Select: React.FC<Props> = ({
  actionType,
  defaultValue,
  dispatch,
  label,
  options,
}) => {
  return (
    <StyledSelect className="select">
      <span>{label}</span>
      <select
        defaultValue={defaultValue}
        onChange={e => dispatch({ type: actionType, payload: e.target.value })}
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
