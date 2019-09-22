import styled from 'styled-components';

const Footer = styled.footer`
  margin-top: auto;
  color: hsl(${p => p.theme.lighterGray});
  font-size: 0.9rem;

  p {
    line-height: 1.1;
  }

  a {
    color: inherit;
  }
`;

export default Footer;
