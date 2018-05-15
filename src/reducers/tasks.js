import { ACTION_ADD_TASK, ACTION_DELETE_TASK } from '../actions/types'
import { CATEGORY } from '../containers/GroupedTaskList'

let initialId = 0;

const initialState = [
  {
    id: initialId++,
    category: CATEGORY.TODO,
    name: 'Complete some task',
    description: 'There is a minor thing to be done'
  },
  {
    id: initialId++,
    category: CATEGORY.TODO,
    name: 'Complete some task 2',
    description: 'There is a minor thing to be done 2'
  },
  {
    id: initialId++,
    category: CATEGORY.TODO,
    name: 'Complete some task 2',
    description: 'There is a minor thing to be done 2'
  },
  {
    id: initialId++,
    category: CATEGORY.INPROGRESS,
    name: 'That task is inprogress',
    description: 'There is a minor thing to be done'
  },
  {
    id: initialId++,
    category: CATEGORY.DONE,
    name: 'This task is already done',
    description: 'There is a minor thing to be done'
  }
]

const tasks = (state = initialState, action) => {
  switch(action.type) {
    case ACTION_ADD_TASK:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          description: action.description,
          category: action.category
        }
      ]

    case ACTION_DELETE_TASK:
      return state.filter(task => task.id !== action.id)

    default:
      return state;
  }
}

export default tasks
