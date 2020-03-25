import React, { useContext } from "react"
import UserItem from "../components/UserItem"
import GithubContext from "../context/github/githubContext"

const Users = () => {
  const githubContext = useContext(GithubContext)

  const { users } = githubContext

  return (
    <div className="users-grid">
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  )
}

export default Users
