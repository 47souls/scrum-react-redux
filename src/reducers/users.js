// import {} from './actions/types'

let initialId = 1;

const initialUsersState = [
  {
    id: initialId++,
    username: 'Nick Holly',
    teamId: 1
  },
  {
    id: initialId++,
    username: 'Patric Nicolson',
    teamId: 2
  },
  {
    id: initialId++,
    username: 'Michael Ticker',
    teamId: 2
  },
  {
    id: initialId++,
    username: 'Steve Stevon',
    teamId: 1
  }
]

const users = (state = initialUsersState, action) => {
  switch (action.type) {

    default:
      return state
  }
}

export default users;
