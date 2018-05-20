import TaskList from '../components/TaskList'
import { connect } from 'react-redux'
import { deleteTask } from '../actions/taskActions'

export const CATEGORY = {
  TODO : 'TODO',
  ONHOLD: 'ONHOLD',
  INPROGRESS : 'INPROGRESS',
  TESTING: 'TESTING',
  DONE : 'DONE'
}

// Selectors
const getTasksForTeam = (teamId, tasks) => tasks.filter(task => task.teamId === teamId)

const getTasksForActiveUser = (activeUserId, tasks) => tasks.filter(task => task.userId === activeUserId)

const getTasksFromCategory = (activeTeamId, tasks, category) => getTasksForTeam(activeTeamId, tasks).filter(task => task.category === category)

// End selectors

const mapStateToProps = (state, ownProps) => ({
  tasks: getTasksFromCategory(state.activeTeamId, state.tasks, ownProps.category)
})

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch,
  onDeleteTask: id => dispatch(deleteTask(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList)
