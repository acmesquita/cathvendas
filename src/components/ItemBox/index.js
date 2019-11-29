import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function ItemBox({ box }) {
  return (
    <Container>
      <h3>{box.title}</h3>
      <p>{box.description}</p>
      <p>Saldo: R$ {box.saldo}</p>
      <Link to={`/caixa/${box.id}`}>Acessar</Link>
    </Container>
  );
}
