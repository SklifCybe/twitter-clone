import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { SignIn } from './pages/SignIn';
import { Home } from './pages/Home';

export const App: React.FC = (): React.ReactElement => {
  return (
    <>
      <Switch>
        <Route path="/login" component={SignIn}/>
        <Route path="/" component={Home}/>
      </Switch>
    </>
  );
}
