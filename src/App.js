import React from 'react';

import GroupedTaskList, { CATEGORY } from './containers/GroupedTaskList'
import AddTask from './containers/AddTask'

const App = () => (
  <div className="container">
    { Object.keys(CATEGORY).map(key =>
      <GroupedTaskList key={key} category={CATEGORY[key]} />
    )}
    <AddTask />
  </div>
)

export default App;
