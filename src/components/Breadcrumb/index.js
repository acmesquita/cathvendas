import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Breadcrumb({ links, current }) {
  return (
    <Container>
      <ul>
        { links.map(link => <li key={link.ul}><Link to={link.url}>{link.title}</Link> / </li>)}
        <li>{current}</li>
      </ul>
    </Container>
  );
}
