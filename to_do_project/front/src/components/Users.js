import React from "react";
import UserItem from './User.js'
import './Users.css'

const UsersList = ({ users }) => {
    return (
        <table>
            <th>
                username
            </th>
            <th>
                First name
            </th>
            <th>
                Last Name
            </th>
            <th>
                email
            </th>
            {/* {users.map((user) => <UserItem user={user} />)} */}
        </table>
    )
}

export default UsersList