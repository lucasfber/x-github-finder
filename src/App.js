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

import GithubContext from "./context/github/GithubState"

const App = () => {
  const [alert, setAlert] = useState(null)
  const [loading, setLoading] = useState(false)

  const setMessage = (message, type) => {
    setAlert({ message, type })

    setTimeout(() => setAlert(null), 2000)
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
                    <Search setMessage={setMessage} />
                    {loading && <Spinner />}
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={props => <User {...props} loading={loading} />}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubContext>
  )
}

export default App
