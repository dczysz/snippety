import React from 'react';

interface Props {
  href: string;
  title?: string;
  children: string;
}

const LinkBlank: React.FC<Props> = ({ href, title = '', children }) => (
  <a href={href} title={title} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export default LinkBlank;
