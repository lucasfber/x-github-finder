import React, { useState, useContext } from "react"

import GithubContext from "../context/github/githubContext.js"
import AlertContext from "../context/alert/alertContext"

const Search = () => {
  const [text, setText] = useState("")

  const githubContext = useContext(GithubContext)
  const alertContext = useContext(AlertContext)

  const { searchUsers, clearUsers, users } = githubContext
  const { setMessage } = alertContext

  const onChange = e => setText(e.target.value)

  const onSubmit = e => {
    e.preventDefault()
    if (text === "") {
      setMessage("Please enter something", "light")
    } else {
      searchUsers(text)
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
      {users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  )
}

export default Search
