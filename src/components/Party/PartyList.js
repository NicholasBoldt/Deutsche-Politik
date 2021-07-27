import classes from "./PartyList.module.css";

const PartyList = (props) => {
  return (
    <div>
        <h2>Political Parties</h2>
      <table align="center">
        <thead>
          <tr>
            <th>Label</th>
            <th>Party</th>
            <th>Ideology</th>
            <th>Leader</th>
          </tr>
        </thead>

        <tbody align="center">
          {props.parties.map((party) => (
            <tr>
              <td>{party.id}</td>
              <td>{party.name}</td>
              <td>{party.ideology}</td>
              <td>{party.leader}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PartyList;
