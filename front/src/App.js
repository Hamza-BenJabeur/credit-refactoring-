import Bar from "./components/appBar/Bar.js";
import { Container, Grow, Grid } from '@material-ui/core';
import Note from "./components/Note/Note.js";
import Form from './components/Form/Form.js'

function App() {
  return (
    <Container maxWidth="lg">
      <Bar/>
    <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={9}  >
            <Note />
          </Grid>
          <Grid item xs={12} sm={3} >
            <Form />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  </Container>
  );
}

export default App;
