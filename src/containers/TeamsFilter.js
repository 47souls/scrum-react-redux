import React from 'react'
import { connect } from 'react-redux'

import { activeTeam } from '../actions/teamsActions'

const TeamsFilter = ({ teams, onTeamSelect }) => (
  <div>
    { teams.map( team =>
      <button key={team.id} onClick={() => onTeamSelect(team)} className={team.active ? "active-button" : null}>{team.name}</button>
    )}
  </div>
)

const mapStateToProps = state => ({
  teams: state.teams
})

const mapDispatchToProps = dispatch => ({
  onTeamSelect: team => dispatch(activeTeam(team))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamsFilter);
