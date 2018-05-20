import { ACTION_ACTIVE_TEAM } from './types'

export const activeTeam = id => ({
  type: ACTION_ACTIVE_TEAM,
  id: id
})
