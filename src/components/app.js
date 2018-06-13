import React, { Component } from 'react';
import UserList from './users-list';
import UserDetail from './user-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <UserList/>
        <UserDetail/>
      </div>
    )
  }
}
