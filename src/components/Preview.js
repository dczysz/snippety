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
  margin: 2rem 0;

  .content-container {
    min-width: 50%;
    max-height: 80%;
    border-radius: 3px;
    /* box-shadow: ${p => p.theme.bs}; //! Doesn't work with html2canvas */
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
