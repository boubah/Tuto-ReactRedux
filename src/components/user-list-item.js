import React from 'react'

const UserListItem = ({user, selectUser}) => {
    return (
       <div>
            <li 
                className="list-group-item" 
                onClick={ () => selectUser(user) }>
                {user.name}
            </li>    
       </div>
    )
  
}

export default UserListItem;