import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import DeleteIcon from '@material-ui/icons/Delete';
import TableHead from '@material-ui/core/TableHead';
import moment from 'moment';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {CircularProgress,Button} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {deleteCredit } from '../../redux/actions/credit.js';
const useStyles = makeStyles({
    table: {
      minWidth: 500,
    },
  });
export default function Note({setCurrentId}) {
  const dispatch = useDispatch();
  const credits = useSelector((state) => state.credits);
    const classes = useStyles();
    return (
      !credits.length?<CircularProgress/>:(
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Full Name</TableCell>
              <TableCell align="right">Price&nbsp;(dt)</TableCell>
              <TableCell align="right">date</TableCell>
              <TableCell align="right">actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {credits.map((credit) => (
              <TableRow key={credit.name}>
                <TableCell component="th" scope="row">
                  {credit.name}
                </TableCell>
                <TableCell align="right">{credit.price}</TableCell>
                <TableCell align="right">{moment(credit.createdAt).fromNow()}</TableCell>
                <TableCell align="right">
                <Button size="small" color="primary" onClick={() => dispatch(deleteCredit(credit._id))}><DeleteIcon fontSize="small" /></Button>
                <Button  color="primary" size="small" onClick={() => setCurrentId(credit._id)}><MoreHorizIcon fontSize="default" /></Button>
                  </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
    )
}




