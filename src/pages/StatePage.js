import classes from './StatePage.module.css'
import { useParams } from "react-router-dom";
import Card from '../components/UI/Card';


const StatePage = props => {
    const params = useParams();
    const state = props.states.find(state => state.id === params.stateId);

    return (
      <Card className={classes["state-page"]}>
        <div className={classes.title}>{state.name}</div>
        <div className={classes.section}>
          <div className={classes.infobox}>
            <div>
              <img src={state.flag} height="200px" width="300px" />
            </div>
            <div className={classes.info}>
              <div>Capital: {state.capital}</div>
              <div>Leader: {state.leader}</div>
              <div>Government: {state.government}</div>
            </div>
          </div>
          <div className={classes.text}>{state.desc}</div>
        </div>
      </Card>
    );
}

export default StatePage;