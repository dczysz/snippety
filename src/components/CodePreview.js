import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

import StyledCodePreview from './styles/CodePreview';

const Code = ({ code, plugin, language }) => {
  const ref = useRef();

  useEffect(() => {
    ref && ref.current && Prism.highlightElement(ref.current);
  }, [code, plugin, language]);

  return (
    <StyledCodePreview className={plugin || ''} id="pre">
      <code ref={ref} className={`language-${language}`}>
        {code.trim()}
      </code>
    </StyledCodePreview>
  );
};

export default Code;
