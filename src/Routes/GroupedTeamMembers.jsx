import { useState } from 'react'

const GroupedTeamMembers = ({ selectedTeam, setTeam, employees, teamMemberCount }) => {

  const groupTeamMembers = () => {
    var teams = [];

    var teamAMembers = employees.filter((e) => e.teamName == 'TeamA');
    var teamA = { team: 'TeamA', members: teamAMembers, collapsed: selectedTeam == 'TeamA' ? false : true }
    teams.push(teamA);

    var teamBMembers = employees.filter((e) => e.teamName == 'TeamB');
    var teamB = { team: 'TeamB', members: teamBMembers, collapsed: selectedTeam == 'TeamB' ? false : true }
    teams.push(teamB);

    var teamCMembers = employees.filter((e) => e.teamName == 'TeamC');
    var teamC = { team: 'TeamC', members: teamCMembers, collapsed: selectedTeam == 'TeamC' ? false : true }
    teams.push(teamC);

    return teams;
  }

  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

  const handleTeam = (e) => {
    var newGroupData = groupedEmployees.map((groupedData) => groupedData.team === e.currentTarget.id
      ? { ...groupedData, collapsed: !groupedData.collapsed } : groupedData
    );

    setGroupedData(newGroupData);
    setTeam(e.currentTarget.id);
  }

  return (
    <main className='text-center my-4'>
      <h5>Grouped Team Members</h5>
      <p>{selectedTeam} has {teamMemberCount} {
        (teamMemberCount <= 1)
          ? "member" :
          "members"}
      </p>
      {
        groupedEmployees.map((item) => {
          return (
            <div key={item.team} className="card mt-2" style={{ cursor: "pointer" }}>
              <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeam}>
                Team Name: {item.team}
              </h4>
              <div id={"collapse_" + item.team} className={item.collapsed === true ? "collapse" : ""}>
                <hr />
                {
                  item.members.map(member => {
                    return (
                      <div key={member.id} className="mt-2">
                        <h5 className="card-title">
                          Full Name: {member.fullName}
                        </h5>
                        <p>Designation: {member.designation}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </main>
  )
}

export default GroupedTeamMembers