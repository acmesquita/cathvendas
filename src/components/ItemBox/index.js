import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function ItemBox() {
  return (
    <Container>
      <h3>Caixa 01</h3>
      <p>idfkasjdbfksadbk sdjfhosadhfóasd</p>
      <p>Saldo: R$ 100</p>
      <Link to="/caixa/1">Acessar</Link>
    </Container>
  );
}
