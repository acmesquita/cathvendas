import React from 'react';
import { Link } from 'react-router-dom';

import {Header} from '../../components';

import { Box, Container } from './styles';

export default function Main() {
  return (
    <Box>
      <Header />
      <Container>
        <Link to="criar-empresa" className="link">Criar Empresa</Link>
      </Container>
    </Box>
  );
}
