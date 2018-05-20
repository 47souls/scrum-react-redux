import React from 'react'
import PropTypes from 'prop-types'

import { focusUser } from '../actions/userActions'

const User = ({ user, dispatch, activeUserId }) => (
  <li
    onClick={() => dispatch(focusUser(user.id))}
    className={user.id === activeUserId ? 'crossed' : null }
  >
  {user.username}
  </li>
)

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    teamId: PropTypes.number.isRequired
  }).isRequired
}

export default User;
