import { useState, useEffect } from "react";
import { Route, Link, Redirect } from 'react-router-dom';
import Leader from "./components/Individual/Leader";
import PartyList from "./components/Party/PartyList";
import StateList from "./components/State/StateList";

import classes from "./App.module.css";
import LeaderPage from "./pages/LeaderPage";
import PartyPage from "./pages/PartyPage";
import StatePage from "./pages/StatePage";
import Card from "./components/UI/Card";

const App = () => {
  const [chancellor, setChancellor] = useState();
  const [president, setPresident] = useState();
  const [states, setStates] = useState([]);
  const [parties, setParties] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "api/seeddata",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const retrievedData = await response.json();

      const loadedStates = [];

      for (const key in retrievedData.states) {
        loadedStates.push({
          id: retrievedData.states[key].iso,
          name: retrievedData.states[key].name,
          capital: retrievedData.states[key].capital,
          leader: retrievedData.states[key].leader,
          government: retrievedData.states[key].government,
          flag: retrievedData.states[key].flag,
          // desc: retrievedData.states[key].description,
          // map: retrievedData.states[key].map
        });
      }

      const loadedParties = [];

      for (const key in retrievedData.parties) {
        loadedParties.push({
          id: retrievedData.parties[key].inital,
          name: retrievedData.parties[key].name,
          ideology: retrievedData.parties[key].ideology,
          leader: retrievedData.parties[key].leader,
          position: retrievedData.parties[key].position,
          group: retrievedData.parties[key].group,
          seats: retrievedData.parties[key].seats,

        });
      }
      setChancellor(retrievedData.chancellor);
      setPresident(retrievedData.president);
      setStates(loadedStates);
      setParties(loadedParties);
    };
    getData();
  }, []);

  const loadedData = (
    <div>
      <Card className={classes.leaders}>
        <Link className={classes.link} to="/chancellor">
          {chancellor && (
            <Leader
              title="German Chancellor"
              name={chancellor.name}
              party={chancellor.party}
              img={chancellor.img}
            />
          )}
        </Link>

        <Link className={classes.link} to="/president">
          {president && (
            <Leader
              title="German President"
              name={president.name}
              party={president.party}
              img={president.img}
            />
          )}
        </Link>
      </Card>
      <Card>
        <PartyList parties={parties} />
      </Card>
      <Card>
        <StateList states={states} />
      </Card>
    </div>
  );


  return (
    <div>
      <Link className={classes.link} to="/">
        <header className={classes.header}>Deutsche Politik</header>
      </Link>
      <Route path="/" exact>
        {loadedData}
      </Route>
      <Route path="/chancellor">
        {chancellor && (
          <LeaderPage
            title="German Chancellor"
            name={chancellor.name}
            party={chancellor.party}
            img={chancellor.img}
            desc={chancellor.desc}
            incumbant_desc={chancellor.incumbant_desc}
          />
        )}
      </Route>
      <Route path="/president">
        {president && (
          <LeaderPage
            title="German President"
            name={president.name}
            party={president.party}
            img={president.img}
            desc={president.desc}
            incumbant_desc={president.incumbant_desc}
          />
        )}
      </Route>
      <Route path="/parties/:partyId">
        {parties && <PartyPage parties={parties}/>}
        {!parties && <Redirect to='/'/>}
      </Route>
      <Route path="/states/:stateId">
        {states && <StatePage states={states}/>}
      </Route>
    </div>
  );
};

export default App;
