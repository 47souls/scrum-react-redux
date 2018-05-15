import React from 'react'
import PropTypes from 'prop-types'

const Task = ({ task, onDeleteTask }) => (
  <div className="task">
    {'This task has name: ' + task.name }
    <br />
    {'And description: ' + task.description }
    <br />
    <button
      onClick={onDeleteTask}
    >Delete
    </button>
  </div>
)

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
}

export default Task
