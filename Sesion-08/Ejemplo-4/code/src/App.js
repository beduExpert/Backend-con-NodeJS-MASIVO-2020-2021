import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import BaseLayout from './layouts/BaseLayout';

// Pages
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductsPage from './pages/ProductsPage';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    window.localStorage.getItem('token')
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }} />
  )} />
);

function App() {
  return (
    <Router>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <PrivateRoute exact path="/products" component={ProductsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BaseLayout>
    </Router>
  );
}

export default App;
