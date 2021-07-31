import { useState, useEffect } from "react";
import { Route, Link } from 'react-router-dom';
import Leader from "./components/Individual/Leader";
import PartyList from "./components/Party/PartyList";
import StateList from "./components/State/StateList";

import classes from "./App.module.css";
import LeaderPage from "./pages/LeaderPage";
import PartyPage from "./pages/PartyPage";

const App = () => {
  const [chancellor, setChancellor] = useState();
  const [president, setPresident] = useState();
  const [states, setStates] = useState([]);
  const [parties, setParties] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://deutsche-politk-default-rtdb.firebaseio.com/.json",
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
          id: key,
          name: retrievedData.states[key].name,
        });
      }

      const loadedParties = [];

      for (const key in retrievedData.parties) {
        loadedParties.push({
          id: key,
          name: retrievedData.parties[key].name,
          ideology: retrievedData.parties[key].ideology,
          leader: retrievedData.parties[key].leader,
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
      <div className={classes.leaders}>
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
      </div>
      <PartyList parties={parties} />
      <StateList states={states} />
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
            desc={chancellor.description}
            incumbent_desc={chancellor.incumbent_desc}
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
            desc={president.description}
            incumbent_desc={president.incumbent_desc}
          />
        )}
      </Route>
      <Route path="/parties/:partyId">
        {parties && <PartyPage parties={parties}/>}
    
      </Route>
    </div>
  );
};

export default App;
