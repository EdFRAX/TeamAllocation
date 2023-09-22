import Teams from './ChildComponents/Teams'
import TeamMembers from './ChildComponents/TeamMembers'

const Content = ({ employees, selectedTeam, teamMemberCount, handleChangeTeam, handleSetTeam }) => {

  return (
    <>
      <div className='container'>
        <div className='row justify-content-center text-center'>
          <p>{selectedTeam} has {teamMemberCount} {
            (teamMemberCount <= 1)
              ? "member" :
              "members"}
          </p>
          <div className='col mb-4'>
            <Teams selectedTeam={selectedTeam} handleChangeTeam={handleChangeTeam} />
          </div>
        </div>
        <div className='row'>
          <TeamMembers employees={employees} selectedTeam={selectedTeam} handleSetTeam={handleSetTeam} />
        </div>
      </div>
    </>
  );
}

export default Content