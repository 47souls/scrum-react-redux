import React from 'react'
import PropTypes from 'prop-types'

const Task = ({ task }) => (
  <div>
    {'And it has status: ' + task.status }
    <br />
    {'This task has name: ' + task.name }
    <br />
    {'And description: ' + task.description }
  </div>
)

Task.propTypes = {
  task: PropTypes.shape({
    status: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
}

export default Task
