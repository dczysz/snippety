import styled from 'styled-components';

const StyledSidebar = styled.aside`
  align-items: stretch;
  background-color: hsl(${p => p.theme.gray});
  color: hsl(${p => p.theme.white});
  display: flex;
  flex-direction: column;
  max-width: ${p => p.theme.sidebarWidth}px;
  padding: 0 1rem;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;

  h2 {
    text-align: center;
  }

  label {
    margin: 0.5rem 0;
  }

  label.select {
    align-items: baseline;
    display: flex;
    justify-content: space-between;

    select {
      background: hsl(${p => p.theme.lightGray});
      border: none;
      border-radius: ${p => p.theme.br};
      color: hsl(${p => p.theme.white});
      font-size: inherit;
      padding: 0.25rem;
      text-align: center;
      width: 10rem;

      :focus {
        outline-color: hsl(${p => p.theme.white});
      }
    }
  }

  label.standalone {
    display: flex;
    justify-content: space-between;

    .flex {
      align-items: center;
      display: flex;
    }

    .tooltip-button {
      align-items: center;
      background: none;
      border: none;
      display: flex;
      justify-content: center;
      margin-left: 0.5rem;
      padding: 0;
      position: relative;
      cursor: help;

      svg {
        fill: hsl(${p => p.theme.lighterGray});
        height: 1.1rem;
        transition: fill 0.1s;
      }

      :hover,
      :focus {
        svg {
          fill: hsl(${p => p.theme.white});
        }
        outline: none;
      }

      .tooltip {
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.1s;
        z-index: 1;
      }

      :focus {
        .tooltip {
          opacity: 1;
          pointer-events: all;
        }
      }
    }
  }

  hr {
    width: 100%;
    margin: 1rem 0;
    border: 0.5px solid hsl(${p => p.theme.lightGray});
  }

  .save {
    margin-top: 1rem;

    button {
      background-color: hsl(${p => p.theme.gray});
      border-radius: ${p => p.theme.br};
      border: 2px solid hsl(${p => p.theme.lightGray});
      padding: 0.25rem 0.5rem;
      color: hsl(${p => p.theme.lighterGray});
      margin: 0.5rem 0;
      margin-right: 0.5rem;
      font-size: inherit;
      transition: all 0.1s;

      :hover {
        background-color: hsl(${p => p.theme.lighterGray});
        color: hsl(${p => p.theme.gray});
        border-color: hsl(${p => p.theme.lighterGray});
      }

      :focus {
        color: hsl(${p => p.theme.lighterGray});
        border-color: hsl(${p => p.theme.lighterGray});
        outline: none;
      }

      :hover:focus {
        color: hsl(${p => p.theme.gray});
      }
    }
  }

  svg {
    height: 1.625rem;
    width: auto;
    fill: hsl(${p => p.theme.white});
  }
`;

export default StyledSidebar;