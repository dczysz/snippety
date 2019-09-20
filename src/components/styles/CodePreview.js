import styled from 'styled-components';

// ID of `pre` is used to be more specific than prism styles
const StyledCodePreview = styled.pre`
  &#pre {
    margin: 0;
    border-radius: 0 0 ${p => p.theme.br} ${p => p.theme.br};
    min-height: 3rem;
    min-width: 8rem;
    background-color: hsl(${p => p.theme.gray});

    code {
      margin: auto 0;
    }
  }
`;

export default StyledCodePreview;
