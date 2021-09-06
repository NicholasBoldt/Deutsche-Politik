import classes from "./StateList.module.css";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const { Link } = require("react-router-dom")

const StateList = (props) => {
  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Flag</TableCell>
            <TableCell align="right">ISO</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Capital</TableCell>
            <TableCell align="right">Leader</TableCell>
            <TableCell align="right">Government</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.states.map((state) => (
            <TableRow key={state.id}>
              <TableCell>
              <img src={state.flag} height='20px' width='30px' />
              </TableCell>
              <TableCell align="right">{state.id}</TableCell>
              <TableCell align="right">{state.name}</TableCell>
              <TableCell align="right">{state.capital}</TableCell>
              <TableCell align="right">{state.leader}</TableCell>
              <TableCell align="right">{state.government}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
  //   <div>
  //     <h2>German States</h2>
  //     <table align="center">
  //       <thead>
  //         <tr>
  //           <th>Flag</th>
  //           <th>ISO</th>
  //           <th>Name</th>
  //           <th>Capital</th>
  //           <th>Leader</th>
  //           <th>Government</th>
  //         </tr>
  //       </thead>

  //       <tbody align="left">
  //         {props.states.map((state) => (
  //           <tr>
  //             <td><Link className={classes.link} to={`/states/${state.id}`}><img src={state.flag} height='20px' width='30px' /></Link></td>
  //             <td><Link className={classes.link} to={`/states/${state.id}`}>{state.id}</Link></td>
  //             <td><Link className={classes.link} to={`/states/${state.id}`}>{state.name}</Link></td>
  //             <td><Link className={classes.link} to={`/states/${state.id}`}>{state.capital}</Link></td>
  //             <td><Link className={classes.link} to={`/states/${state.id}`}>{state.leader}</Link></td>
  //             <td><Link className={classes.link} to={`/states/${state.id}`}>{state.government}</Link></td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   </div>
  // );
};

export default StateList;