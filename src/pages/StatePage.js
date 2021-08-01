import classes from './PartyPage.module.css'
import { useParams } from "react-router-dom";


const StatePage = props => {
    const params = useParams();
    const state = props.states.find(state => state.id === params.stateId);

    return (
      <div className={classes["state-page"]}>
          {state.name}
      </div>
    );
}

export default StatePage;