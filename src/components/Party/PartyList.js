import classes from "./PartyList.module.css";
import { Link } from "react-router-dom";

const PartyList = (props) => {
  return (
    <div>
      <h2>Political Parties</h2>
      <table align="center">
        <thead align='center'>
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
              <td align="center"><Link className={classes.link} to={`/parties/${party.id}`}>{party.name}</Link></td>
              <td align="center"><Link className={classes.link} to={`/parties/${party.id}`}>{party.ideology}</Link></td>
              <td align="center"><Link className={classes.link} to={`/parties/${party.id}`}>{party.leader}</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PartyList;
