import styled from 'styled-components';

const Select = styled.label`
  align-items: baseline;
  display: flex;
  justify-content: space-between;

  select {
    background: hsl(${p => p.theme.lightGray});
    border: none;
    border-radius: ${p => p.theme.br};
    color: inherit;
    font-size: inherit;
    padding: 0.125rem 0;
    text-align: center;
    width: 10rem;

    :focus {
      outline-color: hsl(${p => p.theme.white});
    }
  }
`;

export default Select;
