import React from 'react'
import { connect } from 'react-redux'

import { activeTeam, nonActiveTeam } from '../actions/teamsActions'

const TeamsFilter = ({ activeTeamId, teams, onTeamSelect }) => (
  <div>
    { teams.map( team => {
      return (
        <TeamButton
          key={team.id}
          team={team}
          activeTeamId={activeTeamId}
          onTeamSelect={onTeamSelect}
        />
      )
    }
    )}
  </div>
)

const TeamButton = ({ team, activeTeamId, onTeamSelect }) => (
  <button
    className={team.id === activeTeamId ? 'active-button': null}
    onClick={() => onTeamSelect(team.id, team.id === activeTeamId)}
  >
    {team.name}
  </button>
)

const mapStateToProps = state => ({
  activeTeamId: state.activeTeam,
  teams: state.teams
})

const mapDispatchToProps = dispatch => ({
  onTeamSelect: (id, isActive) => isActive ? dispatch(nonActiveTeam(id)) : dispatch(activeTeam(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamsFilter);
