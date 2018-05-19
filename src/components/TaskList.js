import React from 'react';
import PropTypes from 'prop-types'

// Components
import Task from './Task'

const TaskList = ({ tasks, dispatch, category, onDeleteTask, onChangeCategory }) => (
  <div className="grouped-task-list">
    <h3>{category}</h3>
    { tasks.map(task =>
      <Task
        key={ task.id }
        task={ task }
        dispatch= { dispatch }
        onDeleteTask={() => onDeleteTask(task.id)}
      />
      )
    }
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
