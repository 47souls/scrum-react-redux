import { ACTION_ACTIVE_TEAM, ACTION_NON_ACTIVE_TEAM } from '../actions/types'

import { combineReducers } from 'redux'

let initialActiveTeamId = 0
let initialTeamId = 1

const initialAllTeamsState = [
  {
    id: initialTeamId++,
    name: 'Some team',
    active: false
  },
  {
    id: initialTeamId++,
    name: 'Some team 2',
    active: false
  },
  {
    id: initialTeamId++,
    name: 'Some team 3',
    active: false
  }
]

const allTeams = (state = initialAllTeamsState, action) => {
  switch (action.type) {

    default:
      return state
  }
}

const activeTeamId = (state = initialActiveTeamId, action) => {
  switch (action.type) {
    case ACTION_ACTIVE_TEAM:
      return action.id
    case ACTION_NON_ACTIVE_TEAM:
      return initialActiveTeamId
    default:
      return state
  }
}

export default combineReducers({
  allTeams,
  activeTeamId
})
