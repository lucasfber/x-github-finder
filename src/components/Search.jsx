import React, { useState, useContext } from "react"
import PropTypes from "prop-types"

import GithubContext from "../context/github/githubContext.js"

const Search = ({ clearUsers, hasUsers, setMessage }) => {
  const [text, setText] = useState("")

  const githubContext = useContext(GithubContext)

  const onChange = e => setText(e.target.value)

  const onSubmit = e => {
    e.preventDefault()
    if (text === "") {
      setMessage("Please enter something", "light")
    } else {
      githubContext.searchUsers(text)
      setText("")
    }
  }

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          value={text}
          placeholder="Search users..."
          onChange={onChange}
        />
        <input
          className="btn btn-dark btn-block"
          type="submit"
          value="Search"
        />
      </form>
      {hasUsers && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  )
}

Search.propTypes = {
  clearUsers: PropTypes.func.isRequired,
  hasUsers: PropTypes.bool.isRequired,
  setMessage: PropTypes.func.isRequired
}

export default Search
