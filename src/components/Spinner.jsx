import React, { useContext } from "react"
import GitHubContext from "../context/github/githubContext"

function Spinner() {
  const githubContext = useContext(GitHubContext)
  const { loading } = githubContext

  return loading && <div className="spinner"></div>
}

export default Spinner
