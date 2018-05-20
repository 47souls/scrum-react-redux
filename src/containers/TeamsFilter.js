import React from 'react'
import { connect } from 'react-redux'

import { activeTeam } from '../actions/teamsActions'

const TeamsFilter = ({ activeTeamId, teams, onTeamSelect }) => (
  <div>
    { teams.map( team =>
      <button
        key={team.id}
        onClick={() => onTeamSelect(team.id)}
        className={activeTeamId === team.id ? "active-button" : null}
      >
        {team.name}
      </button>
    )}
  </div>
)

const mapStateToProps = state => ({
  activeTeamId: state.activeTeam,
  teams: state.teams
})

const mapDispatchToProps = dispatch => ({
  onTeamSelect: id => dispatch(activeTeam(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamsFilter);
