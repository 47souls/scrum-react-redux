import React from 'react'
import PropTypes from 'prop-types'

const TeamButton = ({ team, activeTeamId, onTeamSelect }) => (
  <button
    className={team.id === activeTeamId ? 'active-button': null}
    onClick={() => onTeamSelect(team.id, team.id === activeTeamId)}
  >
    {team.name}
  </button>
)

TeamButton.propTypes = {
  team: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  onTeamSelect: PropTypes.func.isRequired
}

export default TeamButton
