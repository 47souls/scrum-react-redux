import { ACTION_ACTIVE_TEAM } from './types'

export const activeTeam = team => ({
  type: ACTION_ACTIVE_TEAM,
  team: team
})
