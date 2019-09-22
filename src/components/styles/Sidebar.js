import styled, { keyframes } from 'styled-components';

const errorFade = keyframes`
  0% {
    opacity: 1;
  }

  80% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const StyledSidebar = styled.aside`
  --color: hsl(${p => p.theme.lightestGray});
  align-items: stretch;
  background-color: hsl(${p => p.theme.gray});
  color: var(--color);
  display: flex;
  flex-direction: column;
  max-width: ${p => p.theme.sidebarWidth}px;
  padding: 0 1rem;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  overflow-y: auto;

  h2 {
    text-align: center;
  }

  label {
    margin: 0.5rem 0;
  }

  label,
  button,
  select,
  footer {
    font-size: 0.8rem;
  }

  label.select {
    align-items: baseline;
    display: flex;
    justify-content: space-between;

    select {
      background: hsl(${p => p.theme.lightGray});
      border: none;
      border-radius: ${p => p.theme.br};
      color: inherit;
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

    .ratio-match {
      margin-right: 0.8rem;
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
        fill: var(--color);
        height: 1.2em;
        transition: fill 0.1s;
      }

      :hover,
      :focus {
        svg {
          fill: var(--color);
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
      color: var(--color);
      margin: 0.5rem 0;
      margin-right: 0.5rem;
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

    .error {
      color: hsl(${p => p.theme.danger});
      animation: ${errorFade} ${p => p.errorLife}ms;
      opacity: 0;
    }
  }

  svg {
    height: 1.625rem;
    width: auto;
    fill: var(--color);
  }
`;

export default StyledSidebar;
