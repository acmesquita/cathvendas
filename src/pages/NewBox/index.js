import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {Header} from '../../components';

import { Container, Card } from './styles';

export default function NewBox() {

  const [description, setDescription] = useState("")
  const dispatch = useDispatch()
  const history = useHistory()

  function handleDescription(event) { setDescription( event.target.value )}

  function createBox() {
    dispatch({ type:"ADD_BOX", description })
    history.push('/') 
  }
  
  return (
    <>
      <Header />
      <Container>
        <Card>
          <label>Qual o seu proposito?</label>
          <input value={description} onChange={handleDescription}/>
          <button type="button" onClick={createBox}>Criar</button>
        </Card>
      </Container>
    </>
  );
}
