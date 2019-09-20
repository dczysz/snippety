import React, { useContext, useRef, useEffect } from 'react';

import { AppContext } from '../store/context';
import { actionTypes } from '../store/types';
import TitleBar from './TitleBar';
import CodePreview from './CodePreview';
import StyledPreview, { StyledBackgroundContainer } from './styles/Preview';

const Preview = () => {
  const [state, dispatch] = useContext(AppContext);
  const ref = useRef();

  useEffect(() => {
    const { offsetWidth, offsetHeight } = ref.current;
    dispatch({ type: actionTypes.WIDTH, payload: offsetWidth });
    dispatch({ type: actionTypes.HEIGHT, payload: offsetHeight });
  }, [dispatch, state.input, state.paddingX, state.paddingY, state.plugin]);

  return (
    <StyledPreview>
      <StyledBackgroundContainer
        className="content"
        ref={ref}
        angle={state.angle}
        hue={state.hue}
        saturation={state.saturation}
        lightness={state.lightness}
        paddingY={state.paddingY}
        paddingX={state.paddingX}
      >
        <div className="content-container">
          <TitleBar />
          <CodePreview
            code={state.input}
            plugin={state.plugin}
            language={state.language}
          />
        </div>
      </StyledBackgroundContainer>
    </StyledPreview>
  );
};

export default Preview;
