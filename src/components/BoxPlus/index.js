import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function BoxPlus() {
  return (
    <Container>
      <Link to="/caixa/new">+</Link>
    </Container>
  );
}
