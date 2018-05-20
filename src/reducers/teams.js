let initialId = 1

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

    default:
      return state
  }
}

export default teams;
