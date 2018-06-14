import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectUser } from '../actions/index';
import { bindActionCreators } from 'redux';
import UserListItem from '../components/user-list-item';

class UserList extends Component {
  render() {
    return (
      <div>
          <ul className="col-md-4">
            {
              this.props.myUsers.map((user) => {
                return <UserListItem  
                            key={user.id}  
                            user={user} 
                            selectUser={this.props.selectUser}/>
                
              })
            }
          </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
   myUsers : state.users
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectUser}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)


