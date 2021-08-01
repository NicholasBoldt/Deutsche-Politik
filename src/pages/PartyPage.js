import classes from './PartyPage.module.css'
import { useParams } from "react-router-dom";


const PartyPage = props => {
    const params = useParams();
    const party = props.parties.find(party => party.id === params.partyId);

    return (
      <div className={classes["party-page"]}>
        <div className={classes.info}>
          <div>{party.leader}</div>
          <div>{party.ideology}</div>
        </div>
        <div className={classes.description}>
        <div className={classes.title}>{party.name}</div>
          <div>{party.desc}</div>
        </div>
      </div>
    );
}

export default PartyPage;