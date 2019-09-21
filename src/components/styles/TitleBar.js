import styled from 'styled-components';

const TitleBar = styled.div`
  align-items: center;
  background: hsla(${p => p.theme.white}, 0.85);
  color: hsl(${p => p.theme.gray});
  display: flex;
  height: ${p => (p.type === '' ? 0 : p.theme.titleBarHeight)};
  padding-left: 0.25rem;
  transition: height 0.2s;

  div {
    font-size: 0.8rem;
    font-weight: bold;
    margin-left: 0.25rem;
  }

  ::before,
  ::after,
  span {
    content: '';
    background: red;
    border-radius: 50%;
    display: ${p => (p.title ? 'none' : 'block')};
    height: 0.75rem;
    margin: 0 0.25rem;
    opacity: ${p => (p.type === '' ? 0 : 1)};
    transition: opacity 0.2s;
    width: 0.75rem;
  }

  ::before {
    background: #ff5f57;
  }
  span {
    background: #ffbd2d;
  }
  ::after {
    background: #27c93f;
  }
`;

export default TitleBar;
