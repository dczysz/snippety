import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.min';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

import StyledCodePreview from './styles/CodePreview';

interface Props {
  code: string;
  language: string;
  plugin: string;
  font: string;
}

const Code: React.FC<Props> = ({ code, language, plugin, font }) => {
  const ref = useRef<HTMLPreElement>(null!);

  useEffect(() => {
    ref && ref.current && Prism.highlightElement(ref.current);
  }, [code, plugin, language]);

  return (
    <StyledCodePreview id="pre" className={plugin || ''} font={font}>
      <code ref={ref} className={`language-${language}`}>
        {code}
      </code>
    </StyledCodePreview>
  );
};

export default Code;
