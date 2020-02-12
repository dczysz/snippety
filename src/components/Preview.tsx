import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';

import { actionTypes } from '../store/types';
import { StateType, ActionType } from '../store/reducer';
import TitleBar from './TitleBar';
import CodePreview from './CodePreview';
import StyledPreview, { StyledBackgroundContainer } from './styles/Preview';

interface Props extends StateType {
  setWidth: (newWidth: number) => void;
  setHeight: (newHeight: number) => void;
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

const mapStateToProps = (state: StateType) => ({
  ...state,
});

const mapDispatchToProps = (dispatch: React.Dispatch<ActionType>) => ({
  setWidth: (newWidth: number) =>
    dispatch({ type: actionTypes.WIDTH, payload: newWidth }),
  setHeight: (newHeight: number) =>
    dispatch({ type: actionTypes.HEIGHT, payload: newHeight }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
