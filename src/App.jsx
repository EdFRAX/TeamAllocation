import { useState, useEffect } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Header from './Components/Header'
import Content from './Components/Content'
import Footer from './Components/Footer'
import NotFound from './Routes/NotFound'
import GroupedTeamMembers from './Routes/GroupedTeamMembers'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {

  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || 'TeamA');
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employees')) || [
    {
      id: 1,
      fullName: "Bob Jones",
      designation: "JavaScript Developer",
      gender: "male",
      teamName: "TeamA"
    },
    {
      id: 2,
      fullName: "Jill Bailey",
      designation: "Node Developer",
      gender: "female",
      teamName: "TeamA"
    },
    {
      id: 3,
      fullName: "Gail Shepherd",
      designation: "Java Developer",
      gender: "female",
      teamName: "TeamA"
    },
    {
      id: 4,
      fullName: "Sam Reynolds",
      designation: "React Developer",
      gender: "male",
      teamName: "TeamB"
    },
    {
      id: 5,
      fullName: "David Henry",
      designation: "DotNet Developer",
      gender: "male",
      teamName: "TeamB"
    },
    {
      id: 6,
      fullName: "Sarah Blake",
      designation: "SQL Server DBA",
      gender: "female",
      teamName: "TeamB"
    },
    {
      id: 7,
      fullName: "James Bennet",
      designation: "Angular Developer",
      gender: "male",
      teamName: "TeamC"
    },
    {
      id: 8,
      fullName: "Jessica Faye",
      designation: "API Developer",
      gender: "female",
      teamName: "TeamC"
    },
    {
      id: 9,
      fullName: "Lita Stone",
      designation: "C++ Developer",
      gender: "female",
      teamName: "TeamC"
    }
  ]);

  const handleChangeTeam = (e) => {
    setTeam(e.target.value);
  }

  const handleSetTeam = (e) => {

    /* This part involves alert functionality
    
    employees.map((employee) =>
      employee.id === parseInt(e.currentTarget.id)
        ? (employee.teamName === selectedTeam)
          ? alert("Do you want remove " + employee.fullName + "'s team?") :
          (employee.teamName === '')
            ? alert("Do you want to allocate " + employee.fullName + " " + selectedTeam + "?") :
            alert("Do you want to change " + employee.fullName + "'s team to " + selectedTeam + "?") :
        0
    );
    */

    const newTeam = employees.map((employee) =>
      employee.id === parseInt(e.currentTarget.id)
        ? (employee.teamName === selectedTeam)
          ? ({ ...employee, teamName: '' }) :
          { ...employee, teamName: selectedTeam } :
        employee
    );

    setEmployees(newTeam);
  }

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Header />
        <Routes>
          <Route path="/" element={
            <Content employees={employees}
              selectedTeam={selectedTeam}
              handleChangeTeam={handleChangeTeam}
              handleSetTeam={handleSetTeam}
              teamMemberCount={employees.filter((employee) => employee.teamName == selectedTeam).length}
            />
          }
          />
          <Route path="/GroupedTeamMembers" element={<GroupedTeamMembers selectedTeam={selectedTeam} setTeam={setTeam} employees={employees} teamMemberCount={employees.filter((employee) => employee.teamName == selectedTeam).length} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
