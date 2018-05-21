import { ACTION_ACTIVE_USER } from '../actions/types'

import { combineReducers } from 'redux'

let initialActiveUserId = 0
let initialUsersId = 1;

const initialAllUsersState = [
  {
    id: initialUsersId++,
    username: 'Nick Holly',
    teamId: 1
  },
  {
    id: initialUsersId++,
    username: 'Patric Nicolson',
    teamId: 2
  },
  {
    id: initialUsersId++,
    username: 'Michael Ticker',
    teamId: 2
  },
  {
    id: initialUsersId++,
    username: 'Steve Stevon',
    teamId: 1
  }
]

const allUsers = (state = initialAllUsersState, action) => {
  switch (action.type) {

    default:
      return state
  }
}

const activeUserId = (state = initialActiveUserId, action) => {
  switch (action.type) {
    case ACTION_ACTIVE_USER:
      return action.id
    default:
      return state
  }
}

export default combineReducers({
  allUsers,
  activeUserId
})
