import React, { useRef, useEffect } from 'react';

import TitleBar from './TitleBar';
import CodePreview from './CodePreview';
import StyledPreview, { StyledBackgroundContainer } from './styles/Preview';

interface Props {
  angle: number;
  hue: number;
  saturation: number;
  lightness: number;
  paddingY: number;
  paddingX: number;
  titleBar: string;
  input: string;
  plugin: string;
  language: string;
  font: string;
  setWidth: any;
  setHeight: any;
}

const Preview: React.FC<Props> = ({
  angle,
  hue,
  saturation,
  lightness,
  paddingY,
  paddingX,
  titleBar,
  input,
  plugin,
  language,
  font,
  setWidth,
  setHeight,
}) => {
  const TITLE_TRANSITION_TIME = 200;
  const ref = useRef<HTMLDivElement>(null!);

  const updateWidthAndHeight = () => {
    const { offsetWidth, offsetHeight } = ref.current;
    setWidth(offsetWidth);
    setHeight(offsetHeight);
  };

  useEffect(() => {
    // Wait for CSS transition to finish
    const timeout = setTimeout(
      updateWidthAndHeight,
      TITLE_TRANSITION_TIME + 20
    );

    return () => clearTimeout(timeout);
  }, [titleBar]);

  useEffect(updateWidthAndHeight, [input, paddingX, paddingY, plugin, font]);

  return (
    <StyledPreview>
      <StyledBackgroundContainer
        className="content"
        ref={ref}
        angle={angle}
        hue={hue}
        saturation={saturation}
        lightness={lightness}
        paddingY={paddingY}
        paddingX={paddingX}
      >
        <div className="content-container">
          <TitleBar type={titleBar} transitionTime={TITLE_TRANSITION_TIME} />
          <CodePreview
            code={input}
            language={language}
            plugin={plugin}
            font={font}
          />
        </div>
      </StyledBackgroundContainer>
    </StyledPreview>
  );
};

export default Preview;
