import React from 'react';

import { Container } from './styles';

export default function TableInOut({ registries, total }) {

  return (
    <Container>
      <table>
        <thead>
          <th>Descrição</th>
          <th>Data</th>
          <th>Valor</th>
        </thead>
        <tbody>
          {registries.map(registry => (
            <tr key={registry.id}>
              <td>{registry.description}</td>
              <td>{registry.date}</td>
              <td className={registry.kind}>{`R$ ${registry.value}`}</td>
            </tr>
          ))}
          <tr className="total">
            <td>TOTAL</td>
            <td></td>
            <td>R$ {total}</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
