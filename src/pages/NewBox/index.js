import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {Header} from '../../components';

import { Container, Card } from './styles';

export default function NewBox() {

  const [description, setDescription] = useState("")
  const [title, setTitle] = useState("")
  const dispatch = useDispatch()
  const history = useHistory()

  function handleDescription(event) { setDescription( event.target.value )}
  function handleTitle(event) { setTitle( event.target.value )}

  const box = {
    id: 3,
    title,
    description,
    saldo: 0,
    registries: []
  }

  function createBox() {
    dispatch({ type:"ADD_BOX", box })
    history.push('/') 
  }
  
  return (
    <>
      <Header />
      <Container>
        <Card>
          <label>Título</label>
          <input value={title} onChange={handleTitle}/>
          <label>Qual o seu proposito?</label>
          <input value={description} onChange={handleDescription}/>
          <button type="button" onClick={createBox}>Criar</button>
        </Card>
      </Container>
    </>
  );
}
