import { ACTION_ACTIVE_USER } from './types'

export const focusUser = id => ({
  type: ACTION_ACTIVE_USER,
  id: id
})
