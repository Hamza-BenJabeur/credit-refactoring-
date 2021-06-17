import React from 'react'
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
      minWidth: 500,
    },
  });
  
  function createData(fullName, price, date) {
    return { fullName, price, date};
  }
  /* Testing with dummy data*/
  const rows = [
    createData('hamza ben jabeur', 159,"15/07/1993"),
    createData('hashem Buzer', 237,"16/01/2012"),
    createData('Wala Nour', 262,"14/05/2020"),
    createData('Halim Boussada',530,"10/10/2010"),
    createData('Ala Rbaai', 356,"12/12/2012")
  ];
export default function Note() {
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Full Name</TableCell>
              <TableCell align="right">Price&nbsp;(dt)</TableCell>
              <TableCell align="right">date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.fullName}>
                <TableCell component="th" scope="row">
                  {row.fullName}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}




