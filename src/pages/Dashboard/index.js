import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';

import { Container } from './styles';

export default function Dashboard() {

  const saldo = useSelector( state => state.company.saldo)

  return (
    <>
      <Header />
      <Container>
        <h2>Caixas</h2>
        <p>Saldo: R$ {saldo}</p>
      </Container>
    </>
  );
}
