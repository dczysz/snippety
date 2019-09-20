import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

// ID of `pre` is used to be more specific than prism styles
const StyledCode = styled.pre`
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

const Code = ({ code, plugin, language }) => {
  const ref = useRef();

  useEffect(() => {
    highlight();
  }, [code, plugin, language]);

  const highlight = () => {
    if (ref && ref.current) {
      console.log('[Code] highlight', code, plugin, language);
      Prism.highlightElement(ref.current);
    }
  };

  return (
    <StyledCode className={plugin || ''} id="pre">
      <code ref={ref} className={`language-${language}`}>
        {code.trim()}
      </code>
    </StyledCode>
  );
};

export default Code;
