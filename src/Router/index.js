import React from 'react';
import { useSelector } from 'react-redux';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Main, NewCompany, SingIn, Dashboard, Box, NewBox } from '../pages'

export default function Router() {

  const userState =  useSelector(state => state.user.user, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/criar-empresa" component={NewCompany} />
        <Route path="/entrar" component={SingIn} />
        { userState && <Route path="/caixa/new" component={NewBox} />}
        { userState && <Route path="/caixa/1" component={Box} />}
        
        { userState && <Route path="/" component={Dashboard} />}
        <Route exact path="*">
          {userState ? <Redirect to="/" /> : <Main />}
        </Route>
        
      </Switch>
    </ BrowserRouter>
  );
}
