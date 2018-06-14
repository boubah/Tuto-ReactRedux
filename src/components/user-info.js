import React from 'react'

const UserInfo = ({myActiveUser}) => {
    return (
        <div>
            <h3>Détail de {myActiveUser.name}</h3>
            <ul>
                <li>Id: {myActiveUser.id}</li>
                <li>Name: {myActiveUser.name}</li>
                <li>Role: {myActiveUser.role}</li>
                <li>Actif: {myActiveUser.actif}</li>
            </ul>
        </div>
    )
}

export default UserInfo