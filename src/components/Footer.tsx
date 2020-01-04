import React from 'react';

import StyledFooter from './styles/Footer';
import LinkBlank from './LinkBlank';

const Footer = () => (
  <StyledFooter>
    <hr />
    <p>
      Inspiration from{' '}
      <LinkBlank href="https://screenzy.io/">Screenzy.io</LinkBlank>
    </p>
    <p>
      Code highlighting by{' '}
      <LinkBlank href="https://prismjs.com/">PrismJS</LinkBlank>
    </p>
    <p>
      Image exporting by{' '}
      <LinkBlank href="https://html2canvas.hertzen.com/">html2canvas</LinkBlank>
    </p>
    <p>
      Angle icon made by{' '}
      <LinkBlank
        href="https://www.flaticon.com/authors/freepik"
        title="Freepik"
      >
        Freepik
      </LinkBlank>{' '}
      from{' '}
      <LinkBlank href="https://www.flaticon.com" title="Flaticon">
        www.flaticon.com
      </LinkBlank>
    </p>
    <p>
      Saturation icon by{' '}
      <LinkBlank href="https://fontawesome.com">FontAwesome</LinkBlank> under{' '}
      <LinkBlank href="https://creativecommons.org/licenses/by/4.0/">
        CC BY 4.0
      </LinkBlank>{' '}
      License
    </p>
    <p>
      Other icons by{' '}
      <LinkBlank href="https://iconscout.com/unicons">Unicons</LinkBlank>
    </p>
    <hr />
    <p>Made by Derek Czysz</p>
  </StyledFooter>
);

export default Footer;
