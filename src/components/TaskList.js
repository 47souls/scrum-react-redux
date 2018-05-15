import React from 'react';
import PropTypes from 'prop-types'

// Components
import Task from './Task'

const TaskList = ( tasks ) => (
  <div>
    { tasks.map(task =>
      <Task
        key={ task.id }
        task={ task }
      />
    )}
  </div>
)

TaskList.propType = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired,
  type: PropTypes.string.isRequired
}

export default TaskList
