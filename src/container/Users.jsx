import React from "react"
import PropTypes from "prop-types"
import UserItem from "../components/UserItem"

function Users({ users }) {
  const mappedUsers = renderUsers(users)
  return (
    <div className="users-grid">
      {mappedUsers.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  )

  function renderUsers(users) {
    return users.map(user => ({
      avatarUrl: user.avatar_url,
      htmlUrl: user.html_url,
      id: user.id,
      login: user.login
    }))
  }
}

Users.propTypes = {
  users: PropTypes.array.isRequired
}

export default Users
