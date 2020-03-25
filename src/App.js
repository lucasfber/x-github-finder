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

import GithubContext from "./context/github/GithubState"

const App = () => {
  return (
    <GithubContext>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search />
                    <Spinner />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={props => <User {...props} />}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubContext>
  )
}

export default App
