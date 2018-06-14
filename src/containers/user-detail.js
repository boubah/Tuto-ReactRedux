import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInfo from '../components/user-info';

class UserDetail extends Component {
   
    render() {
        const {myActiveUser} = this.props
        if (!myActiveUser) {
            return <div>Selectionner un utilisateur pour démarrer</div>
        }
        return <UserInfo myActiveUser={myActiveUser}/>
    }
}

function mapStateToProps(state) {
    return {
     myActiveUser : state.activeUser
    }
  }

export default connect(mapStateToProps)(UserDetail) 

