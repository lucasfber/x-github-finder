import React, { useState } from "react"
import PropTypes from "prop-types"

const Search = ({ clearUsers, hasUsers, searchUsers, setMessage }) => {
  const [text, setText] = useState("")

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
      {hasUsers && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  )
}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  hasUsers: PropTypes.bool.isRequired,
  setMessage: PropTypes.func.isRequired
}

export default Search
