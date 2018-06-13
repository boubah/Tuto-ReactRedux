import React, { Component } from 'react';
import UserList from './users-list';

export default class App extends Component {
  render() {
    return (
      
      <div>
        <h1>Liste des Utilisateurs</h1>
        <UserList/>
        </div>
    );
  }
}
