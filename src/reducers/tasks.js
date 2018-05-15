import { ACTION_ADD_TASK } from '../actions/types'

const initialState = [];

const tasks = (state = initialState, action) => {
  switch(action.type) {
    case ACTION_ADD_TASK:
      return [
        ...state,
        {
          name: action.name,
          description: action.description
        }
      ]

    // case ACTION_DELETE_TASK:
    //   return deleteTodo(state)

    default:
      return state;
  }
}

export default tasks;
