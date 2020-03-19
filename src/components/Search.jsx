import React from "react"
import PropTypes from "prop-types"

class Search extends React.Component {
  state = {
    text: ""
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  onSubmit = e => {
    e.preventDefault()
    this.props.searchUsers(this.state.text)
    this.setState({
      text: ""
    })
  }

  render() {
    const { text } = this.state
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            value={text}
            placeholder="Search users..."
            onChange={this.onChange}
          />
          <input
            className="btn btn-dark btn-block"
            type="submit"
            value="Search"
          />
        </form>
      </div>
    )
  }
}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired
}

export default Search
