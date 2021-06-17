import React from 'react'
import credit from '../image/credit.jpg'
import {  AppBar, Typography } from '@material-ui/core';

import useStyles from './styles';
export default function Bar() {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Credit-Note</Typography>
        <img className={classes.image} src={credit} alt="icon" height="60" />
      </AppBar>
    )
}
