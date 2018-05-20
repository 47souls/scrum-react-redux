import { ACTION_ACTIVE_TEAM, ACTION_NON_ACTIVE_TEAM } from './types'

export const activeTeam = id => ({
  type: ACTION_ACTIVE_TEAM,
  id: id
})

export const nonActiveTeam = () => ({
  type: ACTION_NON_ACTIVE_TEAM
})
