import styled from 'styled-components';
import { fontTypes } from '../../store/types';

interface Props {
  font: string;
}

// ID of `pre` is used to be more specific than prism styles
// Dynamic attributes must be changed in attrs()
// or prism styles are removed
const StyledCodePreview = styled.pre.attrs((p: Props) => ({
  style: {
    fontSize: p.font === fontTypes.DEJAVU_SANS_MONO.code ? '0.9em' : 'inherit',
    fontFamily: p.font || 'inherit',
  },
}))<Props>`
  &#pre {
    margin: 0;
    border-radius: 0 0 ${p => p.theme.br} ${p => p.theme.br};
    min-height: 3rem;
    min-width: 8rem;
    background-color: hsl(${p => p.theme.gray});

    code[class*='language-'] {
      margin: auto 0;
      font-size: inherit;
      font-family: inherit;
    }
  }
`;

export default StyledCodePreview;
