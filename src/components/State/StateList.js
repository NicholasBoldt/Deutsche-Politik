// import classes from "./StateList.module.css";

const { Link } = require("react-router-dom")

const StateList = (props) => {
  return (
    <div>
      <h2>German States</h2>
      <table align="center">
        <thead>
          <tr>
            <th>Initals</th>
            <th>Name</th>
            <th>Capital</th>
            <th>Government</th>
            <th>Leader</th>
          </tr>
        </thead>

        <tbody align="center">
          {props.states.map((state) => (
            <tr>
              <td><Link to={`/states/${state.id}`}>{state.id}</Link></td>
              <td>{state.name}</td>
            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StateList;