import React, { Fragment } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"

import Navbar from "./components/Navbar"
import Spinner from "./components/Spinner"
import Search from "./components/Search"
import Alert from "./components/Alert"
import Users from "./container/Users"
import About from "./pages/About"
import User from "./pages/User"

class App extends React.Component {
  state = {
    users: [],
    loading: false,
    alert: null,
    user: {},
    repos: []
  }

  searchUsers = async text => {
    this.setState({ loading: true })

    const result = await fetch(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    const data = await result.json()

    this.setState({ users: data.items, loading: false })
  }

  clearUsers = () => this.setState({ users: [], loading: false })

  setMessage = (message, type) => {
    this.setState({
      alert: {
        message,
        type
      }
    })

    setTimeout(() => this.setState({ alert: null }), 2000)
  }

  getUser = async username => {
    this.setState({ loading: true })
    const result = await fetch(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    const data = await result.json()
    console.log("getUser()")
    this.setState({ user: data, loading: false })
  }

  getUserRepos = async username => {
    this.setState({ loading: true })
    const result = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    const data = await result.json()
    console.log("getUserRepos()", data)
    this.setState({ repos: data, loading: false })
  }

  render() {
    const { loading, users, user, alert, repos } = this.state
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      hasUsers={users.length > 0}
                      setMessage={this.setMessage}
                    />
                    {loading && <Spinner />}
                    <Users users={users} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={props => (
                  <User
                    {...props}
                    user={user}
                    loading={loading}
                    getUserRepos={this.getUserRepos}
                    getUser={this.getUser}
                    repos={repos}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
