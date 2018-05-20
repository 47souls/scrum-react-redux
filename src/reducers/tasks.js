import { ACTION_ADD_TASK, ACTION_DELETE_TASK, ACTION_CHANGE_CATEGORY } from '../actions/types'
import { CATEGORY } from '../containers/GroupedTaskList'

let initialId = 0;

const initialState = [
  {
    id: initialId++,
    category: CATEGORY.TODO,
    name: 'Complete some task',
    description: 'There is a minor thing to be done',
    teamId: 1
  },
  {
    id: initialId++,
    category: CATEGORY.TODO,
    name: 'Complete some task 2',
    description: 'There is a minor thing to be done 2',
    teamId: 2
  },
  {
    id: initialId++,
    category: CATEGORY.TODO,
    name: 'Complete some task 2',
    description: 'There is a minor thing to be done 2',
    teamId: 2
  },
  {
    id: initialId++,
    category: CATEGORY.INPROGRESS,
    name: 'That task is inprogress',
    description: 'There is a minor thing to be done',
    teamId: 1
  },
  {
    id: initialId++,
    category: CATEGORY.DONE,
    name: 'This task is already done',
    description: 'There is a minor thing to be done',
    teamId: 3
  },
  {
    id: initialId++,
    category: CATEGORY.TESTING,
    name: 'This task is already done',
    description: 'There is a minor thing to be done',
    teamId: 3
  },
  {
    id: initialId++,
    category: CATEGORY.TESTING,
    name: 'This task is already done',
    description: 'There is a minor thing to be done',
    teamId: 1
  },
  {
    id: initialId++,
    category: CATEGORY.ONHOLD,
    name: 'This task is already done',
    description: 'There is a minor thing to be done',
    teamId: 1
  },
  {
    id: initialId++,
    category: CATEGORY.ONHOLD,
    name: 'This task is already done',
    description: 'There is a minor thing to be done',
    teamId: 2
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
          category: action.category,
          teamId: action.teamId
        }
      ]

    case ACTION_DELETE_TASK:
      return state.filter(task => task.id !== action.id)

    case ACTION_CHANGE_CATEGORY:
      return [
        ...state.filter(task => task.id !== action.task.id),
        {
          id: action.task.id,
          name: action.task.name,
          description: action.task.description,
          category: action.task.category,
          teamId: action.task.teamId
        }
      ]
    default:
      return state;
  }
}

export default tasks
