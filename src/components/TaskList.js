import React from 'react';
import PropTypes from 'prop-types'

// Components
import Task from './Task'

const TaskList = ({ tasks, category, onDeleteTask }) => (
  <div className="grouped-task-list">
    { 'Tasks from category: ' + category }
    { tasks.map(task =>
      <Task
        key={ task.id }
        task={ task }
        onDeleteTask={() => onDeleteTask(task.id)}
      />
    )}
  </div>
)

TaskList.propType = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired,
  category: PropTypes.string.isRequired
}

export default TaskList
