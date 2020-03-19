import React from "react"
import PropTypes from "prop-types"

export default function UserItem({ user }) {
  const { avatarUrl, htmlUrl, login } = user
  return (
    <div className="card text-center">
      <img
        src={avatarUrl}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>

      <a href={htmlUrl} className="btn btn-dark btn-sm my-1">
        More
      </a>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.shape({
    avatarUrl: PropTypes.string,
    htmlUrl: PropTypes.string,
    id: PropTypes.number,
    login: PropTypes.string
  }).isRequired
}
