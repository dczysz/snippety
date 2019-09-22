import styled from 'styled-components';

const StyledPreview = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;

  .content-container {
    min-width: 50%;
    max-height: 80%;
    border-radius: ${p => p.theme.br};
    overflow: hidden;
    /* box-shadow: ${p => p.theme.bs}; //! Doesn't work with html2canvas */
  }
`;

const StyledBackgroundContainer = styled.div.attrs(p => ({
  style: {
    padding: `${p.paddingY}px ${p.paddingX}px`,
    backgroundImage:
      p.hue < 0
        ? `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==")`
        : `linear-gradient(
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
  background-color: transparent;
`;

export default StyledPreview;
export { StyledBackgroundContainer };
