import React, { useReducer } from "react"

import GithubContext from "./githubContext"
import GithubReducer from "./githubReducer"
import { SET_LOADING, SEARCH_USERS } from "../types.js"

const GithubState = props => {
  const initialState = {
    loading: false,
    repos: [],
    user: {},
    users: []
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)

  const searchUsers = async text => {
    setLoading()

    const result = await fetch(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )
    const data = await result.json()

    dispatch({ type: SEARCH_USERS, payload: data.items })
  }

  const setLoading = () => dispatch({ type: SET_LOADING })

  return (
    <GithubContext.Provider
      value={{
        loading: state.loading,
        repos: state.repos,
        user: state.user,
        users: state.users,
        searchUsers
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubState
