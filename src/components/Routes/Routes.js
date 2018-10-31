import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { LoginDisplay } from '../LoginDisplay/LoginDisplay';
import { HomeDisplay } from '../HomeDisplay/HomeDisplay';
import Profile from '../../containers/Profile/Profile';
import WatchList from '../../containers/WatchList/WatchList';

export const Routes = ({ user, mapType, login, redirect }) => {
  return (
    <div className="App">
      {!window.location.href.includes('app') &&
        redirect === true &&
        user.id && <Redirect to={`/app/${user.id}`} />}
      {window.location.href.includes('app') &&
        redirect === false && <Redirect to={`/`} />}
      <Route
        exact
        path={'/'}
        render={() => {
          return <LoginDisplay login={login} />;
        }}
      />
      {user && (
        <nav>
          <Route
            exact
            path={`/app/${user.id}`}
            render={() => {
              return <HomeDisplay mapType={mapType} />;
            }}
          />
          <Route
            exact
            path={`/app/${user.id}/watchlist`}
            render={() => {
              return <WatchList />;
            }}
          />
          <Route path={`/app/${user.id}/profile`} component={Profile} />
        </nav>
      )}
    </div>
  );
};
