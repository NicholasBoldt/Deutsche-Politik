import classes from "./PartyList.module.css";
import { Link } from "react-router-dom";

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

        <tbody align="left">
          {props.parties.map((party) => (
            
            <tr>
              <td><Link className={classes.link} to={`/parties/${party.id}`}>{party.id}</Link></td>
              <td align="center">{party.name}</td>
              <td align="center">{party.ideology}</td>
              <td align="right">{party.leader}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PartyList;
