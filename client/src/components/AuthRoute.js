import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthProvider } from "../providers/AuthProvider";

const AuthRoute = ({ component: Component, ...rest }) => (
  <AuthProvider>
    {auth =>
      <Route
        {...rest}
        render={props => (
          !auth.user.admin ?
            <Component {...props} />
            :
            <Redirect
              to={{
                pathname: '/',
                state: { from: props.location }
              }}
            />
        )}
      />
    }
  </AuthProvider>
)

export default AuthRoute;
