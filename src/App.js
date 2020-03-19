import React from "react"
import "./App.css"

import Navbar from "./components/Navbar"
import Spinner from "./components/Spinner"
import Search from "./components/Search"
import Users from "./container/Users"

class App extends React.Component {
  state = {
    users: [],
    loading: false
  }

  searchUsers = async text => {
    this.setState({ loading: true })

    const result = await fetch(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    const data = await result.json()

    this.setState({ users: data.items, loading: false })
  }

  render() {
    const { loading, users } = this.state
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search searchUsers={this.searchUsers} />
          {loading && <Spinner />}
          <Users users={users} />
        </div>
      </div>
    )
  }
}

export default App
