import './App.css';
import { Grid, Typography } from '@material-ui/core';
import Leader from './components/Leader/Leader';
import Party from './components/Party/Party';
import PartyList from './components/PartyList/PartyList';
import StateList from './components/StateList/StateList';

function App() {
  return (
    <div>
      <Grid container>
        <Grid item xs={0} sm={2} />
        <Grid item container xs={12} sm={8} justify='space-around' spacing={5}>
          <Grid item xs={12} align={"center"}>
            <Typography variant="h1">Deutsche Politik</Typography>
          </Grid>
          <Grid item >
            <Leader
              title={"President"}
              name={"Frank-Walter Steinmeier"}
              img={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Frank-Walter_Steinmeier_-_2018_%28cropped%29.jpg/1024px-Frank-Walter_Steinmeier_-_2018_%28cropped%29.jpg"
              }
            />
          </Grid>
          <Grid item>
            <Leader
              title={"Chancellor"}
              name={"Angela Merkel"}
              img={
                "https://upload.wikimedia.org/wikipedia/commons/0/0f/Angela_Merkel_2019_cropped.jpg"
              }
            />
          </Grid>
          <Grid item xs={12} align={"center"} >
            <Typography variant="h5">Parties</Typography>
            <PartyList />
          </Grid>
          <Grid item xs={12} align={"center"} >
            <Typography variant="h5">States</Typography>
            <StateList />
          </Grid>
     
        </Grid>
        <Grid item xs={0} sm={2} />
      </Grid>
    </div>
  );
}

export default App;
