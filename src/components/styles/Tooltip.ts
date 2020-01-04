import styled from 'styled-components';

const Tooltip = styled.div`
  --carat-size: 0.75rem;
  background: hsl(${p => p.theme.lighterGray});
  border-radius: ${p => p.theme.br};
  color: hsl(${p => p.theme.gray});
  left: calc(1.5rem + (var(--carat-size) * 0.5));
  padding: 0.5rem 1rem;
  position: absolute;
  top: -1rem;
  min-width: 8rem;

  .heading {
    font-weight: bold;
    margin-bottom: 0.25rem;
    text-align: center;
  }

  .row {
    display: flex;
    justify-content: space-between;
  }

  ::before {
    background: inherit;
    content: '';
    height: var(--carat-size);
    left: calc(var(--carat-size) * -0.5);
    position: absolute;
    top: calc(1.5rem - (0.5 * var(--carat-size)));
    transform: rotate(45deg);
    width: var(--carat-size);
    z-index: -1;
  }
`;

export default Tooltip;
