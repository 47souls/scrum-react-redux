import React from 'react'
import PropTypes from 'prop-types'

import { CATEGORY } from '../containers/GroupedTaskList'
import { changeTaskCategory } from '../actions/taskActions'

const Task = ({ task, dispatch, onDeleteTask }) => (
  <div className="task">
    {'This task has name: ' + task.name }
    <br />
    {'And description: ' + task.description }
    <br />
    <button
      onClick={onDeleteTask}
    >Delete
    </button>
    <select
      defaultValue={task.category}
      onChange={e => dispatch(changeTaskCategory({
        ...task,
        category: e.target.value
      }))}
    >
      {Object.keys(CATEGORY).map(key =>
        <option key={key}>{CATEGORY[key]}</option>
      )}
    </select>
  </div>
)

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    teamId: PropTypes.number.isRequired
  }).isRequired
}

export default Task
