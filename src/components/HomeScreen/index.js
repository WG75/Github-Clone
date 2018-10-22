// @flow

import React from 'react';
import { Redirect } from 'react-router-dom';
import Nav from '../../containers/Nav';
import SideBar from '../SideBar';
import Repos from '../../containers/Repos';
import UserEvents from '../../containers/UserEvents';

import UsersResults from '../../containers/UsersResults';
import './HomeScreen.css';

type Props = {
  user: any,
};

class HomeScreen extends React.Component<Props> {
  render() {
    const { user, onLogout } = this.props;
    return user ? (
      <div className="app__container">
        <Nav />
        <div className="app__content">
          <SideBar>
            <Repos />
            <UserEvents />
          </SideBar>
          <div className="app__main">
            <UsersResults />
          </div>
        </div>
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default HomeScreen;
