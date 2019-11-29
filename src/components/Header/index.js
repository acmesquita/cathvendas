import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Header() {

  const user = useSelector(state => state.user.user)

  return (
    <Container>
      <h1>CathVendas</h1>
      { user && (<Link to="/" className="link">Olá, {user}!</Link>)}
      { !user && (<Link to="/entrar" className="link">Entrar</Link>)}
    </Container>
  );
}
