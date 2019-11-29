import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Types as TypesUser } from '../../store/reducer/user';
import { Types as TypesCompany } from '../../store/reducer/company';

import { Container, Card } from './styles';

export default function SingIn() {
  const userState =  useSelector(state => state.user.user, [])
  const [user, setUser] = useState( userState )
  const dispatch = useDispatch()
  const history = useHistory()

  function handleUser(event){
    setUser(event.target.value)
  }

  function enter(){
    dispatch({ type: TypesUser.LOGIN, name: user })
    dispatch({ type: TypesCompany.UPDATE_SALDO, saldo: 1000 })
    history.push('/')
  }

  return (
    <Container>
      <Card>
        <div className="field">
          <label>Usuário {userState}</label>
          <input type="text" value={user} onChange={handleUser}/>
        </div>
        <button type="button" onClick={enter}>Entrar</button>
      </Card>
    </Container>
  ); 
}
