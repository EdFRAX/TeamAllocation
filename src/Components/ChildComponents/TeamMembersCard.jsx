import femaleProfile from '../../images/femaleProfile.png'
import maleProfile from '../../images/maleProfile.png'

const TeamMembersCard = ({ employees, selectedTeam, handleSetTeam }) => {
  return (
    employees.map((employee) =>
      <div key={employee.id} className='col-6 col-md-4 mb-2'>
        <div className={(employee.teamName == selectedTeam) ? 'card standout mb-2' : 'card mb-2'} style={{ cursor: 'pointer' }} onClick={handleSetTeam} id={employee.id}>
          {
            (employee.gender == 'male') ? <img src={maleProfile} className='card-img-top' /> : <img src={femaleProfile} className='card-img-top' />
          }
          <div className='card-body'>
            <div className='card-title'>
              <b>Full Name: </b>{employee.fullName}
            </div>
            <div className='card-text'>
              <b>Designation: </b>{employee.designation}
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default TeamMembersCard