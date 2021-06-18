import React from 'react'
import credit from '../image/credit.jpg'
import {  AppBar, Typography ,TextField} from '@material-ui/core';
import useStyles from './styles';
export default function Bar({setClientName}) {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
          <div className={classes.inconTitle}>
        <img className={classes.image} src={credit} alt="icon" height="60" />
        <Typography  variant="h2" align="center" color="primary">Credit-Note</Typography>
        </div>
        <div className={classes.inconTitle}>
        <TextField name="Price" variant="outlined" label="Search Client" className={classes.search} type="search" onChange={(e)=>setClientName(e.target.value)} />
        </div>
      </AppBar>
    )
}
