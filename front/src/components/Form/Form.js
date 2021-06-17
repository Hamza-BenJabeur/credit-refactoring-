import React ,{useState,useEffect}from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { createCredit ,updateCreditByAdding,updateCreditBySubstracting} from '../../redux/actions/credit.js';


export default function Form({ currentId, setCurrentId }) {
  const [creditData, setCreditData] = useState({ name: '', price: 0});
  const credit = useSelector((state) => (currentId ? state.credits.find((credit) => credit._id === currentId) : null));
  const dispatch = useDispatch();
    const classes = useStyles();


    useEffect(() => {
      if (credit) setCreditData(credit);
    }, [credit]);

    const clear = () => {
      setCurrentId(0);
      setCreditData({ name: '', price: 0});
    };


    const handleCreate = async (e) => {
      e.preventDefault();
        dispatch(createCredit(creditData));
        clear();
    };
    const handleUpdateByAdding = async (e) => {
      e.preventDefault();
        dispatch(updateCreditByAdding(currentId,creditData));
        clear();
    };
    const handleUpdateBySubstracting = async (e) => {
      e.preventDefault();
        dispatch(updateCreditBySubstracting(currentId,creditData));
        clear();
    };
  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={classes.form} >
        <Typography variant="h6">{currentId?`Editing credit of ${credit.name}`:'creating credit'}</Typography>
        <TextField name="name" variant="outlined" label="FullName" fullWidth value={creditData.name} onChange={(e) => setCreditData({ ...creditData, name: e.target.value })}/>
        <TextField name="Price" variant="outlined" label="Price" type="number" fullWidth value={creditData.price} onChange={(e)=>setCreditData({...creditData,price:e.target.value})}/>
        {!currentId?
        <div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth onClick={handleCreate}>Create</Button>
        <Button variant="contained" color="secondary" size="small" fullWidth>Clear</Button>
        </div>
        :
        <div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth onClick={handleUpdateByAdding}>Adding</Button>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth onClick={handleUpdateBySubstracting}>Substracting</Button>
        <Button variant="contained" color="secondary" size="small" fullWidth >Clear</Button>
        </div>
        }
      </form>
    </Paper>
  );
};
