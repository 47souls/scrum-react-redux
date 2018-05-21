import React from 'react'
import { connect } from 'react-redux'

import TeamButton from '../components/TeamButton'

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

const mapStateToProps = state => ({
  activeTeamId: state.teams.activeTeamId,
  teams: state.teams.allTeams
})

const mapDispatchToProps = dispatch => ({
  onTeamSelect: (id, isActive) => isActive ? dispatch(nonActiveTeam(id)) : dispatch(activeTeam(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamsFilter);
