import React, { useContext, useRef, useEffect } from 'react';
import styled from 'styled-components';

import { AppContext } from '../store/context';
import { actionTypes } from '../store/types';
import TitleBar from './TitleBar';
import CodePreview from './CodePreview';

const StyledPreview = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  .content-container {
    min-width: 50%;
    max-height: 80%;
    border-radius: 3px;
    box-shadow: ${p => p.theme.bs};
  }
`;

const StyledBackgroundContainer = styled.div.attrs(p => ({
  style: {
    padding: `${p.paddingY}px ${p.paddingX}px`,
    backgroundImage: `linear-gradient(
      ${p.angle}deg,
      hsl(${p.hue}, ${p.saturation}%, ${p.lightness}%),
      hsl(
        ${parseInt(p.hue) + 45},
        ${p.saturation + '%'},
        ${p.lightness + '%'}
      )
    )`,
  },
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Preview = () => {
  const [state, dispatch] = useContext(AppContext);
  const ref = useRef();

  useEffect(() => {
    const { offsetWidth, offsetHeight } = ref.current;
    dispatch({ type: actionTypes.RATIO, payload: offsetWidth / offsetHeight });
  }, [dispatch, state.input, state.paddingX, state.paddingY]);

  return (
    <StyledPreview>
      <StyledBackgroundContainer
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
            plugins={['line-numbers']}
            language={state.language}
          />
        </div>
      </StyledBackgroundContainer>
    </StyledPreview>
  );
};

export default Preview;
