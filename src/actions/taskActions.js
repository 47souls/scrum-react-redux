import { ACTION_ADD_TASK, ACTION_DELETE_TASK } from './types'

export const addTask = task => ({
  type: ACTION_ADD_TASK,
  id: task.id,
  name: task.name,
  description: task.description,
  category: task.category
})

export const deleteTask = id => ({
  type: ACTION_DELETE_TASK,
  id: id
})
