import React, { useReducer } from "react"

import GithubContext from "./githubContext"
import GithubReducer from "./githubReducer"
/* import { actions } from '../types.js' */

const GithubState = props => {
  const initialState = {
    loading: false,
    repos: [],
    user: {},
    users: []
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)

  return (
    <GithubContext.Provider
      value={{
        loading: state.loading,
        repos: state.repos,
        user: state.user,
        users: state.users
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubState
