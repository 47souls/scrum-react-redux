import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import User from '../components/User'

const UsersList = ({ users, dispatch, activeUserId }) => (
  <ul>
    {users.map(user =>
      <User
        key={user.id}
        user={user}
        dispatch={dispatch}
        activeUserId={activeUserId}
      />
    )}
  </ul>
)

UsersList.propTypes = {
  users: PropTypes.array.isRequired
}

// Selectors
const getUsersByTeam = (users, teamId) => users.filter(user => user.teamId === teamId)

const mapStateToProps = state => ({
  users: getUsersByTeam(state.users.allUsers, state.activeTeamId),
  activeUserId: state.activeUserId
})

export default connect(
  mapStateToProps
)(UsersList)
