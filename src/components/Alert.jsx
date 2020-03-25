import React, { useContext } from "react"
import GitHubContext from "../context/github/githubContext"

const Alert = () => {
  const githubContext = useContext(GitHubContext)

  const { alert } = githubContext

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" /> {alert.message}
      </div>
    )
  )
}

export default Alert
