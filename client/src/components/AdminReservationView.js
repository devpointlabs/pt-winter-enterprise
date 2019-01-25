import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthProvider } from "../providers/AuthProvider";

const AuthRoute = ({ component: Component, ...rest }) => (
  <AuthProvider>
    {auth =>
      <Route
        {...rest}
        render={props => (
          !auth.authenticated ?
            <Component {...props} />
            :
            <Redirect
              to={{
                pathname: '/accounts',
                state: { from: props.location }
              }}
            />
        )}
      />
    }
  </AuthProvider>
)

export default AdminReservationView;