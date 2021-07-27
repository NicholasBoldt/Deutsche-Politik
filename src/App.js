import {useState, useEffect, useCallback} from 'react';
import Leader from './components/Individual/Leader';

import classes from './App.module.css'

const App = () => {
  const [chancellor, setChancellor] = useState()
  const [president, setPresident] = useState()
  const [states, setStates] = useState([])

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
  
      for(const key in retrievedData.states) {
        loadedStates.push({
          id: key,
          name: retrievedData.states[key].name,
        });
      }
      setChancellor(retrievedData.chancellor);
      setPresident(retrievedData.president);
      setStates(loadedStates);
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

      {/* <p>States: </p>
      <ul>{states && states.map((state) => <li>{state.name}</li>)}</ul> */}
    </div>
  );

  return (
    <div>
      <header className={classes.header}>
        Deutsche Politik
        </header>
        {loadedData}
    </div>
  );
}

export default App;
