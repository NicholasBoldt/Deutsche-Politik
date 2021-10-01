import classes from "./StateList.module.css";

const { Link } = require("react-router-dom")

const StateList = (props) => {

  const states = [].concat(props.states)
    .sort((a, b) => a.id > b.id ? 1 : -1)

    console.log(states)

  return (
    <div className={classes.stateList}>
      <h2>German States</h2>
      <table  align="center">
        <thead>
          <tr>
            <th>Flag</th>
            <th>ISO</th>
            <th>Name</th>
            <th>Capital</th>
            <th>Leader</th>
            <th>Government</th>
          </tr>
        </thead>

        <tbody align="left">
          {states.map((state) => (
            <tr key={state.id}>
              <td>
                <Link className={classes.link} to={`/states/${state.id}`}>
                  <img src={state.flag} height="20px" width="30px" />
                </Link>
              </td>
              <td>
                <Link className={classes.link} to={`/states/${state.id}`}>
                  {state.id}
                </Link>
              </td>
              <td>
                <Link className={classes.link} to={`/states/${state.id}`}>
                  {state.name}
                </Link>
              </td>
              <td>
                <Link className={classes.link} to={`/states/${state.id}`}>
                  {state.capital}
                </Link>
              </td>
              <td>
                <Link className={classes.link} to={`/states/${state.id}`}>
                  {state.leader}
                </Link>
              </td>
              <td>
                <Link className={classes.link} to={`/states/${state.id}`}>
                  {state.government}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StateList;