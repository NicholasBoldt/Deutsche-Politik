import { useState, useEffect } from "react";
import Leader from "./components/Individual/Leader";
import PartyList from "./components/Party/PartyList";
import StateList from "./components/State/StateList";

import classes from "./App.module.css";

const App = () => {
  const [chancellor, setChancellor] = useState();
  const [president, setPresident] = useState();
  const [states, setStates] = useState([]);
  const [parties, setParties] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://deutsche-politk-default-rtdb.firebaseio.com./.json",
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
        {chancellor && (
          <Leader
            title="German Chancellor"
            name={chancellor.name}
            party={chancellor.party}
            img={chancellor.img}
          />
        )}
        {president && (
          <Leader
            title="German President"
            name={president.name}
            party={president.party}
            img={president.img}
          />
        )}
      </div>
      <PartyList parties={parties}/>
      <StateList states={states}/>
    </div>
  );


  return (
    <div>
      <header className={classes.header}>Deutsche Politik</header>
      <h2 align="center">Federal Parliamentry Republic</h2>
      {loadedData}
    </div>
  );
};

export default App;
