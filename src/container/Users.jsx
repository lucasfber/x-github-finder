import React from "react"
import PropTypes from "prop-types"
import UserItem from "../components/UserItem"

function Users({ users }) {
  return (
    <div className="users-grid">
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  )
}

Users.propTypes = {
  users: PropTypes.array.isRequired
}

export default Users
