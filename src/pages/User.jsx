import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

import Spinner from "../components/Spinner"
import Repos from "../components/Repos"

class User extends React.Component {
  componentDidMount() {
    console.log("cdM")
    const { getUser, match, getUserRepos } = this.props

    getUser(match.params.login)
    getUserRepos(match.params.login)
  }

  render() {
    console.log("render", this.props)
    const { loading, repos } = this.props
    const {
      name,
      hireable,
      avatar_url,
      location,
      bio,
      html_url,
      login,
      company,
      blog,
      followers,
      following,
      public_repos,
      public_gists
    } = this.props.user
    return (
      <div>
        {loading && <Spinner />}
        <Link to="/" className="btn btn-light">
          Back To Search
        </Link>
        <p>
          Hireable:{" "}
          {hireable ? (
            <i className="fas fa-check text-success" />
          ) : (
            <i className="fas fa-times-circle text-danger" />
          )}
        </p>
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              alt=""
              className="round-img"
              style={{ width: "150px" }}
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <div>
                <h3>Bio</h3>
                <p>{bio}</p>
              </div>
            )}
            <a href={html_url} className="btn btn-dark my-1">
              Visit Github Profile
            </a>
            <ul>
              <li>
                {login && (
                  <div>
                    <strong>Username:</strong> {login}
                  </div>
                )}
              </li>
              <li>
                {company && (
                  <div>
                    <strong>Company:</strong> {company}
                  </div>
                )}
              </li>
              <li>
                {blog && (
                  <div>
                    <strong>Website:</strong> {blog}
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <span className="badge badge-primary">Followers: {followers}</span>
          <span className="badge badge-success">Following: {following}</span>
          <span className="badge badge-light">
            Public Repos: {public_repos}
          </span>
          <span className="badge badge-dark">Public Gists: {public_gists}</span>
        </div>
        <Repos repos={repos} />
      </div>
    )
  }
}

User.propTypes = {
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  repos: PropTypes.array.isRequired
}

export default User
