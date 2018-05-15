import React from 'react'
import { connect } from 'react-redux'
import { addTask } from '../actions/taskActions'

const AddTask = ({ dispatch }) => {
  let nameInput = React.createRef();
  let descriptionInput = React.createRef();
  let selectInput = React.createRef();

  let id = 100;

  return (
    <div className="input-from">
      <h1>Enter new task</h1>
      <label>Input task name: </label>
      <input type="text" ref={nameInput}/>
      <label>Input task description: </label>
      <input type="text" ref={descriptionInput}/>
      <label>Status: </label>
      <select ref={selectInput}>
        <option>TODO</option>
        <option>INPROGRESS</option>
        <option>DONE</option>
      </select>
      <button
        onClick={(e) => {
          let taskToAdd = {
            id: id++,
            name: nameInput.current.value,
            description: descriptionInput.current.value,
            category: selectInput.current.value
          };
          dispatch(addTask(taskToAdd))}}
      >Add</button>
    </div>
  )
}

export default connect()(AddTask);
