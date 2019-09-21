import React from 'react';

const LinkBlank = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export default LinkBlank;
