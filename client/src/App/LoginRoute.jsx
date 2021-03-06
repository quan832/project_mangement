import React from 'react';
import { Route } from 'react-router-dom';

function LoginRoute({ component: Component, ...restOfProps }) {
  React.useEffect(() => {
    localStorage.clear()
  });

  return <Route {...restOfProps} render={props => <Component {...props} />} />;
}

export default LoginRoute;
