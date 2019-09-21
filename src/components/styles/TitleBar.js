import styled from 'styled-components';

const TitleBar = styled.div`
  height: ${p => (p.type === '' ? 0 : p.theme.titleBarHeight)};
  background: hsla(${p => p.theme.white}, 0.85);
  display: flex;
  align-items: center;
  padding-left: 0.25rem;
  color: hsl(${p => p.theme.gray});
  transition: height 0.2s;

  div {
    font-size: 0.8rem;
    font-weight: bold;
    margin-left: 0.25rem;
  }

  ::before,
  ::after,
  span {
    width: 0.75rem;
    height: 0.75rem;
    content: '';
    background: red;
    border-radius: 50%;
    margin: 0 0.25rem;
    opacity: ${p => (p.title || p.type === '' ? 0 : 1)};
    transition: opacity 0.2s;
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
