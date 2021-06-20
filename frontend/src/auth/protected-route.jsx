import { withAuthenticationRequired } from '@auth0/auth0-react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';

const loading = () => <CircularProgress />;

/* eslint-disable react/jsx-props-no-spreading */
const ProtectedRoute = ({ component, ...args }) => (
  <Route
    element={withAuthenticationRequired(component, {
      onRedirecting: loading
    })()}
    {...args}
  />
);

ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired
};

export default ProtectedRoute;
