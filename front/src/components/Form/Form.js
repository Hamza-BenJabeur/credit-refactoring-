import React from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';


export default function Form() {
    const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={` ${classes.form}`}>
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField name="name" variant="outlined" label="FullName" fullWidth />
        <TextField name="Price" variant="outlined" label="Price" type="number" fullWidth />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};
