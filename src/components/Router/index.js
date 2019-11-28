import React from 'react';
import { useSelector } from 'react-redux';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Main from '../../pages/Main';
import NewCompany from '../../pages/NewCompany';
import SingIn from '../../pages/SingIn';
import Dashboard from '../../pages/Dashboard';

export default function Router() {

  const userState =  useSelector(state => state.user.user, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/criar-empresa" component={NewCompany} />
        <Route path="/entrar" component={SingIn} />
        { userState && <Route path="/" component={Dashboard} />}
        <Route exact path="*">
          {userState ? <Redirect to="/" /> : <Main />}
        </Route>
        
      </Switch>
    </ BrowserRouter>
  );
}
