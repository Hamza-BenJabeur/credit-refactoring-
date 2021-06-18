import React ,{useState,useEffect} from 'react'
import Bar from "./components/appBar/Bar.js";
import { Container, Grow, Grid } from '@material-ui/core';
import Note from "./components/Note/Note.js";
import Form from './components/Form/Form.js';
import { getCredits } from './redux/actions/credit.js';
import {useDispatch} from 'react-redux'

function App() {
  const [currentId,setCurrentId]=useState(0)
  const [clientName,setClientName]=useState("")
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getCredits());
  },[currentId,dispatch])

  return (
    <Container maxWidth="lg">
      <Bar setClientName={setClientName}/>
    <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={9}  >
            <Note setCurrentId={setCurrentId} clientName={clientName}/>
          </Grid>
          <Grid item xs={12} sm={3} >
            <Form currentId={currentId} setCurrentId={setCurrentId}/>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  </Container>
  );
}

export default App;
