import { schema } from 'normalizr'
import usersSchema from './usersSchema'
import teamsSchema from './teamsSchema'

const tasksSchema = {
  tasks: [new schema.Entity('tasks')]
}

export default tasksSchema;
