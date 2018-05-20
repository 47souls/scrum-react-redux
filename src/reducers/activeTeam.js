import { ACTION_ACTIVE_TEAM } from '../actions/types'

const initialState = 0

const activeTeam = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_ACTIVE_TEAM:
      return action.id
    default:
      return state
  }
}

export default activeTeam
