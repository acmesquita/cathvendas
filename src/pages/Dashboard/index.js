import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';

import { Container, Boxes } from './styles';
import ItemBox from '../../components/ItemBox';
import BoxPlus from '../../components/BoxPlus';

export default function Dashboard() {

  const company = useSelector( state => state.company)

  return (
    <>
      <Header />
      <Container>
        <h2>Caixas</h2>
        <p>Saldo: R$ {company.saldo}</p>
      </Container>
      <Boxes>
        <BoxPlus />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
      </Boxes>
    </>
  );
}
