import { schema } from 'normalizr'

const usersSchema = { users: [new schema.Entity('users')] }

export default usersSchema;
