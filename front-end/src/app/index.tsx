import * as React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { HomePage } from './pages/home';

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ HomePage } />
      </Switch>
    </BrowserRouter>
  );
}
