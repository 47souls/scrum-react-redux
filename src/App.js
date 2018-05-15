import React from 'react';

import GroupedTaskList, { CATEGORY } from './containers/GroupedTaskList'
import AddTask from './containers/AddTask'

const App = () => (
  <div className="container">
    <GroupedTaskList category={ CATEGORY.TODO }/>
    <GroupedTaskList category={ CATEGORY.INPROGRESS }/>
    <GroupedTaskList category={ CATEGORY.DONE }/>

    <AddTask />
  </div>
)

export default App;
