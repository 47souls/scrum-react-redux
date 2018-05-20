import { ACTION_ADD_TASK, ACTION_DELETE_TASK, ACTION_CHANGE_CATEGORY } from './types'

export const addTask = task => ({
  type: ACTION_ADD_TASK,
  id: task.id,
  name: task.name,
  description: task.description,
  category: task.category,
  teamId: task.teamId
})

export const deleteTask = id => ({
  type: ACTION_DELETE_TASK,
  id: id
})

export const changeTaskCategory = task => ({
  type: ACTION_CHANGE_CATEGORY,
  task: task
})
