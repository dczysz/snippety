import styled from 'styled-components';

const App = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  height: 100vh;

  main {
    margin: 0 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default App;
