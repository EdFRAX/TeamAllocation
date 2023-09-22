const Teams = ({ selectedTeam, handleChangeTeam }) => {
  return (
    <select className='form-select form-select-lg' value={selectedTeam} onChange={handleChangeTeam}>
      <option value='TeamA'>TeamA</option>
      <option value='TeamB'>TeamB</option>
      <option value='TeamC'>TeamC</option>
    </select>
  );
}

export default Teams