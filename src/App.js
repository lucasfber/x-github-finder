import React, { useState, Fragment } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"

import Navbar from "./components/Navbar"
import Spinner from "./components/Spinner"
import Search from "./components/Search"
import Alert from "./components/Alert"
import Users from "./container/Users"
import About from "./pages/About"
import User from "./pages/User"

import GithubContext from "./context/github/GitHubState"

const App = () => {
  const [alert, setAlert] = useState(null)
  const [loading, setLoading] = useState(false)
  const [repos, setRepos] = useState([])
  const [user, setUser] = useState({})
  const [users, setUsers] = useState([])

  const searchUsers = async text => {
    setLoading(true)

    const result = await fetch(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    const data = await result.json()

    setUsers(data.items)
    setLoading(false)
  }

  const clearUsers = () => {
    setUsers([])
    setLoading(false)
  }

  const setMessage = (message, type) => {
    setAlert({ message, type })

    setTimeout(() => setAlert(null), 2000)
  }

  const getUser = async username => {
    setLoading(true)

    const result = await fetch(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )

    const data = await result.json()

    setUser(data)
    setLoading(false)
  }

  const getUserRepos = async username => {
    setLoading(true)

    const result = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )

    const data = await result.json()

    setRepos(data)
    setLoading(false)
  }

  return (
    <GithubContext>
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
                      searchUsers={searchUsers}
                      clearUsers={clearUsers}
                      hasUsers={users.length > 0}
                      setMessage={setMessage}
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
                    getUserRepos={getUserRepos}
                    getUser={getUser}
                    repos={repos}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubContext>
  )
}

export default App
