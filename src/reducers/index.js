import { combineReducers } from 'redux'
import activeTeamId from './activeTeamId'
import activeUserId from './activeUserId'
import tasks from './tasks'
import teams from './teams'
import users from './users'

export default combineReducers({
  activeTeamId,
  activeUserId,
  teams,
  tasks,
  users
})
