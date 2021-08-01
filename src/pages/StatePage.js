import classes from './PartyPage.module.css'
import { useParams } from "react-router-dom";
import Card from '../components/UI/Card';


const StatePage = props => {
    const params = useParams();
    const state = props.states.find(state => state.id === params.stateId);

    return (
      <Card className={classes["state-page"]}>
        <div className={classes.title}>{state.name}</div>
        <div className={classes.section}>
          <div className={classes.info}>
            <div>Capital</div>
            <div>Leader</div>
            <div>Government</div>
          </div>
          <div className={classes.description}>
            Some random text about the state
          </div>
        </div>
      </Card>
    );
}

export default StatePage;