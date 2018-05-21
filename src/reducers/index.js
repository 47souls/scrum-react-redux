import { combineReducers } from 'redux'
import tasks from './tasks'
import teams from './teams'
import users from './users'

export default combineReducers({
  tasks,
  teams,
  users
})
