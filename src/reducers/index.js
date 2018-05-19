import { combineReducers } from 'redux'
import tasks from './tasks'
import teams from './teams'

export default combineReducers({
  teams,
  tasks
})
