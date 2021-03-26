import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function PartyList() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Party</TableCell>
            <TableCell align="right">Party Leader</TableCell>
            <TableCell align="right">Alignment</TableCell>
            <TableCell align="right">EU Group</TableCell>
            <TableCell align="right">Current Seats</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>CDU</TableCell>
            <TableCell align="right">Angela Merkel</TableCell>
            <TableCell align="right">Centre-Right</TableCell>
            <TableCell align="right">EPP</TableCell>
            <TableCell align="right">Number</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>SPD</TableCell>
            <TableCell align="right">Olaf Scholz</TableCell>
            <TableCell align="right">Centre-Left</TableCell>
            <TableCell align="right">S&D</TableCell>
            <TableCell align="right">Number</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}