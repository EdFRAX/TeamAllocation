import TeamMembersCard from './TeamMembersCard'

const TeamMembers = ({employees, selectedTeam, handleSetTeam}) => {
  return(
    <TeamMembersCard employees={employees} selectedTeam={selectedTeam} handleSetTeam={handleSetTeam} />
  );
}

export default TeamMembers