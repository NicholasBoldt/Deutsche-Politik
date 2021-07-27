import {useState, useEffect, useCallback} from 'react';
import './App.css';

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
      console.log(retrievedData);
      setChancellor(retrievedData.chancellor);
      setPresident(retrievedData.president);
      setStates(loadedStates);
    };
    getData();
  }, []);

  const loadedData = (
    <div>
      <p>Chancellor: {chancellor && chancellor.name}</p>
      <p>President: {president && president.name}</p>
      <p>States: </p>
      <ul>{states && states.map((state) => <li>{state.name}</li>)}</ul>
    </div>
  );

  return (
    <div className="App">
      <header className="App-header">
        Deutsche Politik
        {loadedData}
        <button></button>
      </header>
    </div>
  );
}

export default App;
