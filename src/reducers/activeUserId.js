import { ACTION_ACTIVE_USER } from '../actions/types'

const initialActiveUserId = 0

const activeUserId = (state = initialActiveUserId, action) => {
  switch (action.type) {
    case ACTION_ACTIVE_USER:
      return action.id
    default:
      return state
  }
}

export default activeUserId
