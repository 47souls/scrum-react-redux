import { combineReducers } from 'redux'
import tasks from './tasks'
import teams from './teams'
import activeTeam from './activeTeam'

export default combineReducers({
  activeTeam,
  teams,
  tasks
})
