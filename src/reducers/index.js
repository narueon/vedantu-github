import {combineReducers} from 'redux'
import fetchRepoData from './fetch-repos'
import fetchUserData from './fetch-user'
const allReducers = combineReducers({
    repos: fetchRepoData,
    user: fetchUserData
  })

export default allReducers