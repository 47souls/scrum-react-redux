import TaskList from '../components/TaskList'
import { connect } from 'react-redux'
import { deleteTask } from '../actions/taskActions'

export const CATEGORY = {
  TODO : 'TODO',
  INPROGRESS : 'INPROGRESS',
  DONE : 'DONE'
}

// Selectors
const getTasksFromCategory = (tasks, category) => {
  return tasks.filter(task => task.category === category);
}

const mapStateToProps = (state, ownProps) => ({
  tasks: getTasksFromCategory(state.tasks, ownProps.category)
})

const mapDispatchToProps = dispatch => ({
  onDeleteTask: id => dispatch(deleteTask(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList)
