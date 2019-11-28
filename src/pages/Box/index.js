import React from 'react';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

export default function Box() {
  return (
    <>
      <Header />
      <div><Link to="/">Caixas</Link> / Caixa 01</div>
    </>
  );
}
