import { ACTION_ACTIVE_TEAM } from '../actions/types'

let initialId = 0

const initialState = [
  {
    id: initialId++,
    name: 'Some team',
    active: false
  },
  {
    id: initialId++,
    name: 'Some team 2',
    active: false
  },
  {
    id: initialId++,
    name: 'Some team 3',
    active: false
  }
]

const teams = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_ACTIVE_TEAM:
      return [
        ...state.filter(item => item.id === action.team.id).map(item => ({ ...item, active: true})),
        ...state.filter(item => item.id !== action.team.id).map(item => ({ ...item, active: false}))
      ].sort((item1, item2) => item1.id - item2.id)

    default:
      return state
  }
}

export default teams;
