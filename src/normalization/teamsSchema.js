import { schema } from 'normalizr'

const teamsSchema = { teams: [new schema.Entity('teams')] }

export default teamsSchema;
