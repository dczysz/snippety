import React from 'react';

import StyledSelect from './styles/Select';

const Select = ({ label, options, defaultValue, dispatch, actionType }) => {
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
