import React from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
  } from '@material-ui/pickers'
  import DateFnsUtils from '@date-io/date-fns';

import useStyles from './styles';


export default function Form() {
    const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={` ${classes.form}`}>
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField name="name" variant="outlined" label="FullName" fullWidth />
        <TextField name="Price" variant="outlined" label="Price" fullWidth />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="outlined"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date"
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          fullWidth
        />
        </MuiPickersUtilsProvider>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};
