import classes from './PartyPage.module.css'
import { useParams } from "react-router-dom";
import Card from '../components/UI/Card';


const PartyPage = props => {
    const params = useParams();
    const party = props.parties.find(party => party.id === params.partyId);

    return (
      <Card className={classes["party-page"]}>
        <div className={classes.title}>{party.name}</div>
        <div className={classes.section}>
          <div className={classes.info}>
            <div>{party.leader}</div>
            <div>{party.ideology}</div>
          </div>
          <div className={classes.description}>
            <div>This is a huge test on what the hell you can write in here</div>
          </div>
        </div>
      </Card>
    );
}

export default PartyPage;