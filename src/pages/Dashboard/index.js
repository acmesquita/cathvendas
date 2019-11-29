import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';

import { Container, Boxes, MainBoxes } from './styles';
import {ItemBox, BoxPlus} from '../../components';

export default function Dashboard() {

  const company = useSelector( state => state.company)

  return (
    <>
      <Header />
      <Container>
        <h2>Caixas</h2>
        <p>Saldo: R$ {company.saldo}</p>
      </Container>
      <MainBoxes>
        <Boxes>
          <BoxPlus />
          { company.boxes.map(box => (
            <ItemBox key={box.id} box={box}/>
          ))}
        </Boxes>
      </MainBoxes>
    </>
  );
}
