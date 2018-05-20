import React from 'react';

import GroupedTaskList, { CATEGORY } from './containers/GroupedTaskList'
import AddTask from './containers/AddTask'
import TeamsFilter from './containers/TeamsFilter'
import UsersList from './containers/UsersList'

const App = () => (
  <div>
    <TeamsFilter />
    <UsersList />
    <div className="container">
      { Object.keys(CATEGORY).map(key =>
        <GroupedTaskList key={key} category={CATEGORY[key]} />
      )}
      <AddTask />
    </div>
  </div>
)

export default App;
