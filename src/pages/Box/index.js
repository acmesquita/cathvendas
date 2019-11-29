import React from 'react';
import { Header, Breadcrumb, TableInOut } from '../../components';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

import { Container, Div } from './styles';

export default function Box() {

  const { id } = useParams();
  const box = useSelector(state => state.company.boxes.filter(box => box.id == id)[0])

  const links = [
    {
      url: '/',
      title: 'Caixas'
    },
  ]

  return (
    <>
      <Header />
      <Breadcrumb links={links} current={box.title} />
      <Div>
        <p>{box.description}</p>
      </Div>
      <Container>
        <h3>Saldo R$ {box.saldo}</h3>
        <button type="button">Novo Registro</button>
      </Container>
      <TableInOut registries={box.registries} total={box.saldo} />
    </>
  );
}
