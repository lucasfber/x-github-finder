import React, { useReducer } from "react"

import GithubContext from "./githubContext"
import GithubReducer from "./githubReducer"
import {
  SET_LOADING,
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS
} from "../types.js"

const GithubState = props => {
  const initialState = {
    loading: false,
    repos: [],
    user: {},
    users: [],
    alert: null
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

  const getUser = async username => {
    setLoading()

    const result = await fetch(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )

    const data = await result.json()

    dispatch({ type: GET_USER, payload: data })
  }

  const getUserRepos = async username => {
    setLoading()

    const result = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    )

    const data = await result.json()

    //setRepos(data)
    dispatch({ type: GET_REPOS, payload: data })
  }

  const setLoading = () => dispatch({ type: SET_LOADING })

  const clearUsers = () => {
    dispatch({ type: CLEAR_USERS })
  }

  return (
    <GithubContext.Provider
      value={{
        loading: state.loading,
        repos: state.repos,
        user: state.user,
        users: state.users,
        searchUsers,
        getUser,
        clearUsers,
        getUserRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubState
